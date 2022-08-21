import { NextFunction, Request, Response } from "express";
import BusinessLogicError from "../handler/BusinessLogicError ";
import IResponse from "../Responses/IResponse";
import BadRequestResponse from "../Responses/BadRequestResponse";

function handleError(
  err: TypeError | BusinessLogicError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let businessLogicError = err;

  if (err instanceof BusinessLogicError) {
    businessLogicError = new BusinessLogicError(
      new BadRequestResponse({
        errorCode: "INTERNAL_SERVER_ERROR",
        errorMessage: "Internal server error",
      })
    );
  }

  res
    .status((businessLogicError as BusinessLogicError).status)
    .send(businessLogicError);
}

export default handleError;
