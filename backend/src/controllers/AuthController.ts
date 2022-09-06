import { Request, Response } from "express";
import LoginRequestDTO from "../core/dtos/user/LoginRequestDTO";
import UserCreateRequestDTO from "../core/dtos/user/UserCreateRequestDTO";
import { IUserProps } from "../core/interfaces/IUser";
import IAuthService from "../core/services/abstract/IAuthService";
import AuthModule from "../modules/AuthModule";

export default class AuthController {
    private service : IAuthService

    constructor() {
        const dep = new AuthModule();
        this.service = dep.getAuthService();
    }

    login = (req : Request, res : Response) => {
        this.service.login(new LoginRequestDTO(req.body as IUserProps))
            .then((response) => res.status(response.status || 200).json(response))
    }

    create = (req : Request, res : Response) => {
        this.service.create(new UserCreateRequestDTO(req.body))
            .then((_res) =>
                res.status(_res.status || 200).json(_res)
            )
    }

    disable = (req : Request, res : Response) => {
        this.service.setEnabled(req.params.userId, 0)
            .then((_res) => res.status(_res.status || 200).json(_res))
    }

    enable = (req : Request, res : Response) => {
        this.service.setEnabled(req.params.userId, 1)
            .then((_res) => res.status(_res.status || 200).json(_res))
    }
}