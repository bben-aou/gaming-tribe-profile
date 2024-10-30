import prisma from "@lib/prisma";
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Profile } from "passport-github2";
import { User } from "@prisma/client";

type DoneFunction = (error: Error | null, user?: User | false) => void;

export const setupGitHubStrategy = () => {
  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID!,
        clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        callbackURL: process.env.GITHUB_CALLBACK_URL!,
        scope: ['user:email'],
      },
      async (
        _accessToken: string,
        _refreshToken: string,
        profile: Profile,
        done: DoneFunction
      ) => {
        try {
          const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;

          if (!email) {
            return done(new Error('No email provided from GitHub'));
          }

          let user = await prisma.user.findUnique({
            where: { email: email },
          });

          if (user) {
            user = await prisma.user.update({
              where: { id: user.id },
              data: { githubId: profile.id },
            });
          } else {
            user = await prisma.user.create({
              data: {
                email: email,
                firstName: profile.name?.givenName ?? profile.displayName?.split(' ')[0] ?? "",
                lastName: profile.name?.familyName ?? profile.displayName?.split(' ').slice(1).join(' ') ?? "",
                username: profile.username ?? "",
                githubId: profile.id,
                avatar: profile.photos?.[0]?.value ?? "",
                city: "",
                country: "",
                password: "",
              },
            });
          }

          return done(null, user);
        } catch (error) {
          console.error('Error in GitHub strategy:', error);
          return done(error instanceof Error ? error : new Error('An unknown error occurred'));
        }
      }
    )
  );
};