import { NextFunction, Request, Response } from "express";
import BusinessLogicError from "../handler/BusinessLogicError ";
import IResponse from "../Responses/IResponse";
import BadRequestResponse from "../Responses/BadRequestResponse";
import errors from "../handler/errors.handler";

function errorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof BusinessLogicError) {
    res.status(err.status || 400).json(new BadRequestResponse({...err}))
    return
  }

  res.status(err.status || 400).json(new BadRequestResponse({
    status : 400,
    errorMessage : err.message || errors.BASE.message,
    errorCode : errors.BASE.code
  }))
}

export default errorHandlerMiddleware;
