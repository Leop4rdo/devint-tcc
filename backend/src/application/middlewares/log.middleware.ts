import { NextFunction, Request, Response } from "express";

const logMiddleware = (req : Request, res : Response, next : NextFunction) => {
    // console.log(`[INFO] headers :`, req.headers)
    console.log(`[INFO] ${req.method} request at ${req.url} |`, 'params :', req.params, 'body : ', req.body);
    next()
}

export default logMiddleware
