import { Request, Response } from "express";
import AuthRepository from "../../adapters/database/repositories/AuthRepository";
import CompanyRepository from "../../adapters/database/repositories/CompanyRepository";
import DevRepository from "../../adapters/database/repositories/DevRepository";
import PasswordResetTokenRepository from "../../adapters/database/repositories/PasswordResetTokenRepository";
import EmailService from "../../adapters/mail/EmailService";
import AuthService from "../../core/services/AuthService";
import DevService from "../../core/services/DevService";
import { IUserProps } from "../../interfaces/IUser";
import LoginInput from "../../ports/input/user/LoginInput";
import UserCreateInput from "../../ports/input/user/UserCreateInput";

export default class AuthController {
    private authRepo : AuthRepository
    private devRepo : DevRepository
    private companyRepo : CompanyRepository
    private passResetTokenRepo : PasswordResetTokenRepository
    private emailService : EmailService
    private devService : DevService
    private authService : AuthService

    constructor() {
        this.authRepo = new AuthRepository();
        this.devRepo = new DevRepository();
        this.companyRepo = new CompanyRepository();
        this.passResetTokenRepo = new PasswordResetTokenRepository();
        this.emailService = new EmailService();
        this.devService = new DevService(this.devRepo);
        
        this.authService = new AuthService(this.authRepo, this.devRepo, this.companyRepo, this.passResetTokenRepo, this.emailService, this.devService);
    }

    login = (req : Request, res : Response) => {
        this.authService.login(new LoginInput(req.body))
            .then((response) => res.status(response.status || 200).json(response))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    create = (req : Request, res : Response) => {
        this.authService.create(new UserCreateInput(req.body))
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    disable = (req : Request, res : Response) => {
        this.authService.setEnabled(req.params.userId, 0)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    enable = (req : Request, res : Response) => {
        this.authService.setEnabled(req.params.userId, 1)
            .then((_res) => res.status(_res.status || 200).json(_res))  
            .catch((err) => res.status(err.status || 500).json(err))
    }

    requestPasswordRecovery = (req : Request, res : Response) => {
        this.authService.requestPasswordRecovery(req.body.email)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    changePassword = (req : Request, res : Response) => {
        this.authService.changePassword(req.body.password, req.body.token)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }
}