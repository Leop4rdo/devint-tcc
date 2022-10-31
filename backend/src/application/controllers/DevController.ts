import DevRepository from "@src/adapters/database/repositories/DevRepository";
import DevService from "@src/core/services/DevService";
import PaginateListInput from "@src/ports/input/PaginateListInput";
import DevFollowInput from "@src/ports/input/user/dev/DevFollowInput";
import {Request, Response} from "express";

export default class DevController {
    private repo : DevRepository
    private service : DevService

    constructor() {
        this.repo = new DevRepository()
        this.service = new DevService(this.repo)

    }
    
    listByFilters = (req : Request, res: Response) => {
        this.service.list(new PaginateListInput(req.query))
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
            
    }

    toggleFollow = (req : Request, res: Response) => {
        const input = new  DevFollowInput(req.body.userData.id, req.params.devId)

        this.service.toggleFollow(input)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
            
    }

    findById = (req : Request, res: Response) => {
        this.service.findById(req.params.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }
}
