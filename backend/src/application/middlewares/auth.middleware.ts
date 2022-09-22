import { NextFunction, Request, Response } from "express";
import BadRequestResponse from "../Responses/BadRequestResponse";
import * as jwt from "jsonwebtoken"
import forbiddenResponse from "../Responses/ForbiddenResponse";

const authMiddleware = (req : Request, res : Response, next : NextFunction) => {
    if (process.env.PROFILE === 'dev' && process.env.IGNORE_AUTH) return next()

    const auth = req.get("Authorization")

    if (!auth) return res.status(403).json(new forbiddenResponse())

    const token = auth.split(' ')[1]


    jwt.verify(token, process.env.SECRET, (err: any, decoded: any) => {
        if (err) {
            console.warn(err.message)
            return res.status(403).json(new forbiddenResponse())
        }
        req.body.userData = decoded;
    })

    next()
}

export default authMiddleware