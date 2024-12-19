/** @format */

import { databaseSetup } from "./setup";
import { AppDataSource } from "./setup/datasource";

const setupSever = async () => {
  try {
    await databaseSetup();
    await AppDataSource.initialize();
  } catch (err) {}
};

setupSever();
