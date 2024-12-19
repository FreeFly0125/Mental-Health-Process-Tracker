/** @format */

import { DailyInfoEntity } from "@/entities";
import { AppDataSource } from "@/setup/datasource";
import { CreateDailyLogType } from "@/types";

export const createDailyLog = async (
  dailyLog: CreateDailyLogType
): Promise<DailyInfoEntity> => {
  const logRepository = AppDataSource.getRepository(DailyInfoEntity);

  return await logRepository.save(dailyLog);
};
