import { Request, Response } from "express";
import IUserService from "../core/services/abstract/IUserService";
import UserModule from "../modules/UserModule";

export default class UserController {
  private service: IUserService;

  constructor() {
    const dep = new UserModule();
    this.service = dep.getUserService();
  }

  list = (req: Request, res: Response) => {
    this.service.list()
      .then((_res) => res.status(_res.status || 200).json(_res))
      .catch((err) => res.status(err.status || 500).json(err))
  };

  getById = (req: Request, res : Response) => {
    this.service.getById(req.params.userId)
      .then((_res) => res.status(_res.status || 200).json(_res))
      .catch((err) => res.status(err.status || 500).json(err))
  }
}
