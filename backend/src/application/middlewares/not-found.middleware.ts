import errors from "@src/helpers/errors";
import { NextFunction, Request, Response, Router } from "express";
import BadRequestResponse from "../Responses/BadRequestResponse";


const notFoundMiddleware = (req : Request, res : Response) => {
    res.status(404).json( new BadRequestResponse({
        status: 404,
        message : errors.ROUTE_NOT_FOUND,
    }))
}

export default notFoundMiddleware