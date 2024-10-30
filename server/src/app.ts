import express from "express";
import authRoute from "@routes/auth.route";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors, { CorsOptions } from "cors";
import session from "express-session";
import passport from "passport";
import { setupGitHubStrategy } from "@config/githubStrategy";

const app = express();

dotenv.config();
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
setupGitHubStrategy();

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [process.env.CLIENT_URL].filter(Boolean);
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/api/auth", authRoute);

export default app;
