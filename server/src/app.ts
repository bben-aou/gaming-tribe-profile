import express from "express";
import authRoute from "@routes/auth.route";
import dotenv from "dotenv";



const app = express();

dotenv.config();





app.use("/api/auth",authRoute);

export default app;