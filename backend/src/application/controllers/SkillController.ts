import DevRepository from "@src/adapters/database/repositories/DevRepository";
import SkillRepository from "@src/adapters/database/repositories/SkillRepository";
import DevService from "@src/core/services/DevService";
import SkillService from "@src/core/services/SkillService";
import PaginateListInput from "@src/ports/input/PaginateListInput";
import DevFollowInput from "@src/ports/input/user/dev/DevFollowInput";
import DevUpdateInput from "@src/ports/input/user/dev/DevUpdateInput";
import {Request, Response} from "express";

export default class SkillController {
    private repo : SkillRepository
    private service : SkillService

    constructor() {
        this.repo = new SkillRepository()
        this.service = new SkillService(this.repo)
    }
    
    create = (req: Request, res: Response) => {
        this.service.create(req.body)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    list = (req : Request, res: Response) => {
        this.service.list()
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }
}
