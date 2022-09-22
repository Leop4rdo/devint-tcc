import { NextFunction, Request, Response, Router } from "express";
import errors from "../handler/errors.handler";
import BadRequestResponse from "../Responses/BadRequestResponse";


const notFoundMiddleware = (req : Request, res : Response) => {
    res.status(404).json( new BadRequestResponse({
        status: 404,
        errorMessage : errors.ROUTE_NOT_FOUND.message,
        errorCode : errors.ROUTE_NOT_FOUND.code
    }))
}

export default notFoundMiddleware