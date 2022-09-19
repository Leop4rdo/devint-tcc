import { NextFunction, Request, Response } from "express";
import BusinessLogicError from "../handler/BusinessLogicError ";
import IResponse from "../Responses/IResponse";
import BadRequestResponse from "../Responses/BadRequestResponse";
import errors from "../handler/errors.handler";

function errorHandlerMiddleware(
  err: Error | BusinessLogicError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  try{
    next()
  } catch(err) {
    res.status(400).json(new BadRequestResponse({
        status : 400,
        errorMessage : err.message || errors.BASE.message,
        errorCode : errors.BASE.code
      }))
  }


  // res.status(400).json(new BadRequestResponse({
  //   status : 400,
  //   errorMessage : err.message || errors.BASE.message,
  //   errorCode : errors.BASE.code
  // }))
}

export default errorHandlerMiddleware;
