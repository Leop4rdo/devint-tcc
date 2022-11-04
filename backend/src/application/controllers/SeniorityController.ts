import DevRepository from "@src/adapters/database/repositories/DevRepository";
import SeniorityRepository from "@src/adapters/database/repositories/SeniorityRepository";
import SkillRepository from "@src/adapters/database/repositories/SkillRepository";
import DevService from "@src/core/services/DevService";
import SeniorityService from "@src/core/services/SeniorityService";
import SkillService from "@src/core/services/SkillService";
import PaginateListInput from "@src/ports/input/PaginateListInput";
import DevFollowInput from "@src/ports/input/user/dev/DevFollowInput";
import DevUpdateInput from "@src/ports/input/user/dev/DevUpdateInput";
import {Request, Response} from "express";

export default class SeniorityController {
    private repo : SeniorityRepository
    private service : SeniorityService

    constructor() {
        this.repo = new SeniorityRepository()
        this.service = new SeniorityService(this.repo)
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
