import { Request, Response } from "express";
import CompanyRepository from "@repositories/CompanyRepository";
import DevRepository from "@repositories/DevRepository";
import UserService from "@services/UserService";


export default class UserController {
  private service: UserService
  private devRepo: DevRepository
  private companyRepo : CompanyRepository

  constructor() {
    this.devRepo = new DevRepository()
    this.companyRepo = new CompanyRepository()

    this.service = new UserService(this.devRepo, this.companyRepo);
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
