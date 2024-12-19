/** @format */

import { DailyInfoEntity } from "@/entities";
import { AppDataSource } from "@/setup/datasource";
import { CreateDailyLogType } from "@/types";
import { Between, Equal } from "typeorm";

export const createDailyLog = async (
  dailyLog: CreateDailyLogType
): Promise<DailyInfoEntity | null> => {
  const logRepository = AppDataSource.getRepository(DailyInfoEntity);

  const existingLog = await logRepository.findOne({
    where: { date: Equal(dailyLog.date) },
  });

  if (existingLog) {
    return null;
  }

  return await logRepository.save(dailyLog);
};

export const getDailyLog = async (
  email: string,
  startDate: string,
  endDate: string
): Promise<DailyInfoEntity[] | null> => {
  const logRepository = AppDataSource.getRepository(DailyInfoEntity);

  const startDateTime = new Date(startDate);
  const endDateTime = new Date(endDate);

  const logs = await logRepository.find({
    where: { email: Equal(email), date: Between(startDateTime, endDateTime) },
  });

  return logs;
};
