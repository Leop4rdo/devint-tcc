import { error } from "console";
import BusinessLogicError from "../../../handler/BusinessLogicError ";
import errors from "../../../handler/errors.handler";
import IDevRepository from "../../../infra/repositories/abstract/IDevRepository";
import IRepository from "../../../infra/repositories/abstract/IRepository";
import BadRequestResponse from "../../../Responses/BadRequestResponse";
import IResponse from "../../../Responses/IResponse";
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
import SuccessResponse from "../../../Responses/SuccessResponse";
import DevCreateRequestDTO from "../../dtos/user/dev/DevCreateRequestDTO";
import DevEntity from "../../entities/DevEntity";
import { AbstractService } from "../abstract/AbstractService";
import { IDevService } from "../abstract/IDevService";
import IService from "../abstract/IService";

import axios from "axios";

export default class DevService implements IDevService {
    private repo : IDevRepository

    constructor(repo : IDevRepository) {
        this.repo = repo;
    }


    list(): Promise<IResponse> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<IResponse> {
        throw new Error("Method not implemented.");
    }

    async create(body: DevCreateRequestDTO): Promise<IResponse> {
        const dtoValidationErrors = await body.validate()

        if (dtoValidationErrors.length > 0) throw new BusinessLogicError(dtoValidationErrors)

        const dev = await this.repo.create(body as unknown as DevEntity)

        const res = new SuccessResponse({
            status: 201,
            data: dev
        })

        this.populateProfile(dev.githubUsername, dev.id)

        return res
    }
    
    private async populateProfile(githubUsername : string, id : string) {
        const dev = await this.repo.findById(id)
        const githubRes = (await axios.get(`https://api.github.com/users/${githubUsername}`)).data

        dev.profilePicUrl = githubRes.avatar_url
        dev.bio = githubRes.bio || ""
        // TODO : auto follow github followers
        // TODO : auto favorite projects from starred github repositories
        
        this.repo.update(dev)
    }
}