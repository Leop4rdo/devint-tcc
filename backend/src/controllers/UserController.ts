import { Request, Response } from "express";
import UserDTO from "../core/dtos/user/UserDTO";
import UserEntity from "../core/entities/UserEntity";
import { IUserProps } from "../core/interfaces/IUser";
import IService from "../core/services/abstract/IService";
import IUserService from "../core/services/abstract/IUserService";
import errors from "../handler/errors.handler";
import UserModule from "../modules/UserModule";
import ServerErrorResponse from "../Responses/ServerErrorResponse";

export default class UserController {
    private service : IUserService

    constructor() {
        const dep = new UserModule();   
        this.service = dep.getUserService()
    }

    list = (req : Request, res : Response) => {
        this.service.list()
            .then(_res => res.status(_res.status || 200).json(_res))
            .catch(err => res.status(400).json(this.handleError(err)))
    }

    getById = (req : Request, res : Response) => {
        this.service.findById(req.params.userId)
            .then(_res => res.status(_res.status || 200).json(_res))
            .catch(err => res.status(400).json(this.handleError(err)))
    }

    create = (req : Request, res : Response) => {
        this.service.create(new UserDTO(req.body as IUserProps))
            .then(_res => res.status(_res.status || 200).json(_res))
            .catch(err => res.status(400).json(this.handleError(err)))
    }

    update = (req : Request, res : Response) => {
        this.service.update(new UserDTO(req.body as IUserProps), req.params.userId)
            .then(_res => res.status(_res.status || 200).json(_res))
            .catch(err => res.status(400).json(this.handleError(err)))
    }

    disable = (req : Request, res : Response) => {
        this.service.disable(req.params.userId)
            .then(_res => res.status(_res.status || 200).json(_res))
            .catch(err => res.status(400).json(this.handleError(err)))
    }

    private handleError(err: any) {
        return new ServerErrorResponse({
            status : 400,
            errorMessage : errors.BASE.message,
            errorCode :errors.BASE.code 
        })
    }
}