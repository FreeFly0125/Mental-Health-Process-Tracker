/** @format */

import { backendSetup, databaseSetup } from "./setup";
import { Logger } from "./utilis";

const setupSever = async () => {
  try {
    await databaseSetup();
    Logger.info("Database connected!");
  } catch (err) {
    Logger.error(err);
    Logger.info("Failed to connect Database!");
  }

  try {
    await backendSetup();
    Logger.info("Server is running now!");
  } catch (err) {
    Logger.error(err);
    Logger.info("Sever running failed!");
  }
};

setupSever();
