/** @format */

import express from "express";
import { authRouter } from "./auth.router";
import { logRouter } from "./dailyInfo.router";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/dailyInfo", logRouter);

export default router;
