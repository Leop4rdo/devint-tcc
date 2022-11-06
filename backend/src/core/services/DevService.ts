import axios from "axios";
import DevEntity from "@entities/DevEntity";
import DevRepository from "@repositories/DevRepository";
import { getGithubUserProfile } from "@adapters/github/GithubService";
import IResponse from "@src/application/Responses/IResponse";
import SuccessResponse from "@src/application/Responses/SuccessResponse";
import DevCreateInput from "@ports/input/user/dev/DevCreateInput";
import DevOutput from "@src/ports/output/user/DevOutput";
import PaginateListInput from "@src/ports/input/PaginateListInput";
import DevMinimalOutput from "@src/ports/output/user/DevMinimalOutput";
import IDevProps from "../domain/interfaces/IDev";
import DevFollowInput from "@src/ports/input/user/dev/DevFollowInput";
import Dev from "../domain/Dev";
import BadRequestResponse from "@src/application/Responses/BadRequestResponse";
import DevUpdateInput from "@src/ports/input/user/dev/DevUpdateInput";
import errors from "@src/helpers/errors";

export default class DevService {
    private repo : DevRepository

    constructor(repo : DevRepository) {
        this.repo = repo;
    }


    async findById(id: string, loggedDev : string): Promise<IResponse> {
        const dev = await this.repo.findById(id, [
            'following', 
            'followers', 
            'socialLinks', 
            'careerFocus', 
            'autoDeclaredSeniority',
            'skills',
        ]);

        if (!dev) 
            return new BadRequestResponse({
                message : 'Can not find dev',
                status : 404
            })

        return new SuccessResponse({
            data : new DevOutput(dev, loggedDev)
        })
    }

    async list(filters : PaginateListInput) : Promise<IResponse> {
        const devs = await this.repo.listByFilters(filters);
    
        const mapped = devs.map((dev) => new DevMinimalOutput(dev as IDevProps))

        return new SuccessResponse({ data : mapped })
    }

    async create(body: DevCreateInput): Promise<IResponse> {
        await body.validate()

        const dev = await this.repo.create(body as unknown as DevEntity)

        const res = new SuccessResponse({
            status: 201,
            data: new DevOutput(dev)
        })

        this.populateProfile(body.githubUsername, dev.id)

        return res
    }

    async toggleFollow (input: DevFollowInput ): Promise<IResponse>{
        const dev : Dev = await this.repo.findById(input.source, ['following'])

        console.log('dev ->', dev)

        const targetIndex = dev.following.findIndex((dev)=>  dev.id == input.target) 
            
        if (targetIndex < 0)
            dev.following.push({ id : input.target} as unknown as Dev)
        else 
            dev.following.splice(targetIndex, 1)

        await this.repo.update(dev as DevEntity)
        
        return new SuccessResponse({
            status : 200,
            data : new DevOutput(dev)
        })
    }

    async update (input: DevUpdateInput, id: string ): Promise<IResponse>{
        
        const dev : DevEntity = await this.repo.findById(id)

        if (!dev)
            return new BadRequestResponse({ status : 404, message: errors.ENTITY_NOT_FOUND })


        const updated = Object.assign(dev, input)
        
        const res = await this.repo.update(updated)

        return new SuccessResponse({
            data : res
        })
    }
    
    private async populateProfile(githubUsername : string, id : string) {
        const dev = await this.repo.findById(id)
        const githubRes = await getGithubUserProfile(githubUsername)

        dev.profilePicUrl = githubRes.avatar_url
        dev.bio = githubRes.bio || ""
        // TODO : auto follow github followers
        // TODO : auto favorite projects from starred github repositories
        
        this.repo.update(dev)
    }
}
