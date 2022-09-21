import { NextFunction, Request, Response } from "express";

const logMiddleware = (req : Request, res : Response, next : NextFunction) => {
    console.log(`[INFO] ${req.method} request at ${req.url}. body :`, req.body, 'params :', req.params);
    next()
}

export default logMiddleware