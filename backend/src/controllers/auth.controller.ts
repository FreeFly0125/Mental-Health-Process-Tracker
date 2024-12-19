/** @format */

import { authService } from "@/services";
import { errorHandlerWrapper } from "@/utilis/errorHandlerWrapper";
import { Request, Response } from "express";

const signUpHandler = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const newUser = await authService.createUser({ name, email });

  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(409).json({ message: "User Already exists" });
  }
};

export const signUp = errorHandlerWrapper(signUpHandler);
