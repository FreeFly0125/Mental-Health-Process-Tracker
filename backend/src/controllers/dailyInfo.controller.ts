/** @format */

import { dailyInfoService } from "@/services";
import { CreateDailyLogType } from "@/types";
import { errorHandlerWrapper } from "@/utilis";
import { Request, Response } from "express";

const createLogHandler = async (req: Request, res: Response) => {
  const dailyLog: CreateDailyLogType = { ...req.body };
  const newLog = await dailyInfoService.createDailyLog(dailyLog);
  res.status(201).json({ newLog });
};

export const createlog = errorHandlerWrapper(createLogHandler);
