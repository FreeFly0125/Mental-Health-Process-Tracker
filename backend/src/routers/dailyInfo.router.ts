/** @format */

import { dailyInfoController } from "@/controllers";
import { Router } from "express";

export const logRouter = Router();

logRouter.post("/", dailyInfoController.createlog);
