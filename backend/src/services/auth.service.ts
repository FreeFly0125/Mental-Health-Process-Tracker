/** @format */

import { UserEntity } from "@/entities";
import { AppDataSource } from "@/setup/datasource";
import { CreateUserRequestType } from "@/types";

export const createUser = async ({
  name,
  email,
}: CreateUserRequestType): Promise<UserEntity | null> => {
  const userRepostory = AppDataSource.getRepository(UserEntity);

  const existingUser = await userRepostory.findOne({ where: { email } });

  if (existingUser) {
    return null;
  }

  const newUser = new UserEntity();
  Object.assign(newUser, { name, email });

  return await userRepostory.save(newUser);
};
