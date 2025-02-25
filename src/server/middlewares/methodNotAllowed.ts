import { Request, Response, NextFunction } from "express";
import AppError from "../../utils/helper/AppError";

const methodNotAllowed = (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Method ${req.method} is not allowed on ${req.originalUrl} route`, 405));
};

export default methodNotAllowed;
