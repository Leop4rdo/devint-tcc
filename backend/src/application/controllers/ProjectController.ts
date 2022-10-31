import ProjectRepository from "@src/adapters/database/repositories/ProjectRepository";
import ProjectService from "@src/core/services/ProjectSerivce";
import ProjectCreateInput from "@src/ports/input/projects/ProjectCreateInput";
import {Request, Response} from "express";

export default class ProjectController {
    private repo : ProjectRepository
    private service : ProjectService

    constructor() {
        this.repo = new ProjectRepository()
        this.service = new ProjectService(this.repo)
    }

    create = (req : Request, res : Response) => {
        this.service.create(new ProjectCreateInput(req.body), req.body.userData.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    update = (req : Request, res : Response) => {
        this.service.create(new ProjectCreateInput(req.body), req.params.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    list = (req : Request, res : Response) => {
        this.service.list()
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    listByDev = (req : Request, res : Response) => {
        this.service.list({ owner : req.params.ownerId })
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    getById = (req : Request, res : Response) => {
        this.service.getById(req.params.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }
}
