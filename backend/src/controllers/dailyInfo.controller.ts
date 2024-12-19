/** @format */

import { dailyInfoService } from "@/services";
import { CreateDailyLogType } from "@/types";
import { errorHandlerWrapper } from "@/utilis";
import { Request, Response } from "express";

const createLogHandler = async (req: Request, res: Response) => {
  const dailyLog: CreateDailyLogType = { ...req.body };
  const newLog = await dailyInfoService.createDailyLog(dailyLog);

  if (newLog) {
    res.status(201).json(newLog);
  } else {
    res.status(409).json({ message: "Your log In this Date already exists" });
  }
};

const getLogHandler = async (req: Request, res: Response) => {
  const { email, startDate, endDate } = req.query;

  const logEmail = String(email);
  const sDate = String(startDate);
  const eDate = String(endDate);

  const logs = await dailyInfoService.getDailyLog(logEmail, sDate, eDate);

  if (logs) {
    res.status(201).json(logs);
  }
};

export const createlog = errorHandlerWrapper(createLogHandler);
export const getLog = errorHandlerWrapper(getLogHandler);
