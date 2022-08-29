import { Request, Response } from "express";
import LoginRequestDTO from "../core/dtos/user/LoginRequestDTO";
import UserCreateRequestDTO from "../core/dtos/user/UserCreateRequestDTO";
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
    }

    getById = (req : Request, res : Response) => {
        this.service.findById(req.params.userId)
            .then(_res => res.status(_res.status || 200).json(_res))
    }

    create = (req : Request, res : Response) => {
        this.service.create(new UserCreateRequestDTO(req.body as IUserProps))
            .then(_res => res.status(_res.status || 200).json(_res))
    }

    update = (req : Request, res : Response) => {
        this.service.update(new UserDTO(req.body as IUserProps), req.params.userId)
            .then(_res => res.status(_res.status || 200).json(_res))
    }

    disable = (req : Request, res : Response) => {
        this.service.disable(req.params.userId)
            .then(_res => res.status(_res.status || 200).json(_res))
    }

    login = (req : Request, res : Response) => {
        this.service.login(new LoginRequestDTO(req.body as IUserProps))
            .then(_res => res.status(_res.status || 200).json(_res))
    }
}