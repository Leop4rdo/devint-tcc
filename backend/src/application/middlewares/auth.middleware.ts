import { NextFunction, Request, Response } from "express";
import BadRequestResponse from "../Responses/BadRequestResponse";
import * as jwt from "jsonwebtoken"
import forbiddenResponse from "../Responses/ForbiddenResponse";
import DevRepository from "@src/adapters/database/repositories/DevRepository";
import { DataSource } from "typeorm";
import { AppDataSource } from "@src/adapters/database/data-source";
import DevEntity from "@src/adapters/database/entities/DevEntity";
import DevOutput from "@src/ports/output/user/DevOutput";


const authMiddleware = (req : Request, res : Response, next : NextFunction) => {
    if (process.env.PROFILE === 'dev' && process.env.IGNORE_AUTH) {
        AppDataSource.getRepository<DevEntity>(DevEntity).find().then(devs => {
            req.body.userData = {
                id: 'b4c02b51-2601-4257-b9a4-de61ef83ad34',
                name: 'ezequiel',
                bio: '',
                gender: 'm',
                profilePicUrl: 'https://avatars.githubusercontent.com/u/5909549?v=4',
                bannerURI: '',
                comunityRating: 0,
                notifications: null,
                currentJob: '',
                githubUsername: null,
                openToWork: false,
                birthday: '2005-02-28',
                auth: undefined,
                email: 'ezequielmathias2b@gmail.com'
            }

            return next()
        });

        return
    }

    const auth = req.get("Authorization")

    if (!auth) return res.status(403).json(new forbiddenResponse())

    const token = auth.split(' ')[1]


    jwt.verify(token, process.env.SECRET, (err: any, decoded: any) => {
        if (err) {
            console.warn('[WARN] Forbidden access! ->', err.message)
            return res.status(403).json(new forbiddenResponse())
        }
        req.body.userData = decoded;
        next()
    })
}

export default authMiddleware