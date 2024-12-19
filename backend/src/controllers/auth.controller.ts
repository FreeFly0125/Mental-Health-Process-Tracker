/** @format */

import { authService } from "@/services";
import { errorHandlerWrapper } from "@/utilis/errorHandlerWrapper";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const signUpHandler = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  const newUser = await authService.createUser({ name, email });

  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(409).json({ message: "User Already exists" });
  }
};

const signInHandler = async (req: Request, res: Response) => {
  const { email } = req.body;

  const user = await authService.getUser({ email });

  if (!user) {
    res.status(409).json({ message: "User not found!" });
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  res.status(200).json({
    token: token,
    username: user.name,
  });
};

export const signUp = errorHandlerWrapper(signUpHandler);
export const signIn = errorHandlerWrapper(signInHandler);
