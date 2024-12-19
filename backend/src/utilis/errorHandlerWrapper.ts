/** @format */

import { Request, Response, NextFunction } from "express";

export const errorHandlerWrapper = (
  func: (req: Request, res: Response, NextFunction) => void
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
