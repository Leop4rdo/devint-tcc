import DevRepository from "@src/adapters/database/repositories/DevRepository";
import DevService from "@src/core/services/DevService";
import PaginateListInput from "@src/ports/input/PaginateListInput";
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
}
