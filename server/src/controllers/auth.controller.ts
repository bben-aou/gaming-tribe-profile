import { Response, Request, NextFunction } from "express";
import { hashPassword } from "@utils/hashPassword";
import prisma from "@lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "@utils/generateAccessToken";
import { generateRefreshToken } from "@utils/generateRefreshToken";
import passport from "passport";
import { User } from "@prisma/client";

export const register = async (req: Request, res: Response) => {
  console.log("register endpoint", req.body);
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Hash the password before storing it in the database
    const hashedPassword = await hashPassword(password);

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        username: "",
        email: email,
        password: hashedPassword,
        city: "",
        country: "",
      },
    });

    // Generate a Refresh Token

    const refreshToken = generateRefreshToken(newUser.id);
    const accessToken = generateAccessToken(newUser.id);

    if (!refreshToken) {
      throw new Error("JWT_ACCESS_TOKEN is not defined");
    }
    if (!refreshToken) {
      throw new Error("JWT_REFRESH_TOKEN is not defined");
    }

    // set Refresh Token in http-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // send access token and user information in response

    res.status(201).json({
      accessToken,
      user: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        username: newUser.username,
        avatar: newUser.avatar,
        city: newUser.city,
        country: newUser.country,
      },
    });
  } catch (error) {
    console.log("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  console.log("login endpoint");
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  try {
    // Checking if the user already exists
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Checking if the password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // --------- New token handling logic ---------
    const accessToken = generateAccessToken(user.id);
    const refreshToken = generateRefreshToken(user.id);
    if (!accessToken) {
      throw new Error("JWT_ACCESS_TOKEN is not defined");
    }
    if (!refreshToken) {
      throw new Error("JWT_REFRESH_TOKEN is not defined");
    }
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    // Send Access Token in response body
    res.status(200).json({
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error("Login Error :", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req: Request, res: Response) => {
  console.log("logout endpoint");
  try {
    res.clearCookie("token").status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const me = async (req: Request, res: Response) => {
  console.log("Me endpoint");

  const authHeader = req.headers["authorization"];
  const accessToken = authHeader?.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ message: "Access Token Required!" });
  }

  try {
    const payload = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET!) as {
      id: string;
    };
    const user = await prisma.user.findUnique({ where: { id: payload.id } });

    if (!user) {
      return res.status(401).json({ message: "Invalid Access Token!" });
    }

    res.status(200).json({
      user: {
        id: user.id,
        firstName: user.firstName,
        username: user.username,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        city: user.city,
        country: user.country,
      },
    });
  } catch (error) {
    console.error("Me Endpoint error:", error);

    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Access Token Expired" });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid Access Token" });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
};

export const refreshToken = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh Token is required !" });
  }
  try {
    const payload = jwt.verify(
      refreshToken,
      process.env.JWT_REFRESH_SECRET!
    ) as { id: string };
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) {
      return res.status(401).json({ message: "Invalid Refresh Token  !" });
    }
    const newAccessToken = generateAccessToken(user.id);
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    console.error("Refresh Token Error : ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const githubAuth = passport.authenticate("github", {
  scope: ["profile", "email"],
});

// github controller
interface AuthError extends Error {
  status?: number;
}

export const githubAuthCallback = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate(
    "github",
    { session: false },
    (
      err: AuthError,
      user: User | false | undefined,
      info: object | undefined
    ) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect(
          `${process.env.CLIENT_URL}/login?error=authentication_failed`
        );
      }

      const accessToken = generateAccessToken(user.id);
      const refreshToken = generateRefreshToken(user.id);

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.redirect(
        `${process.env.CLIENT_URL}/auth/github/callback?token=${accessToken}`
      );
    }
  )(req, res, next);
};
