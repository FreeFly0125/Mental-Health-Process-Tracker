/** @format */

import { createDatabase } from "typeorm-extension";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { DailyInfoEntity, UserEntity } from "@/entities";
import { AppDataSource } from "./datasource";
import "dotenv/config";

export const databaseSetup = async (): Promise<void> => {
  await createDatabase({
    ifNotExist: true,
    options: {
      type: "postgres",
      host: process.env.DB_HOST,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_DATABASE,
      synchronize: true,
      entities: [DailyInfoEntity, UserEntity],
      entitySkipConstructor: true,
      namingStrategy: new SnakeNamingStrategy(),
    },
  });

  await AppDataSource.initialize();
};
