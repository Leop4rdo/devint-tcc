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

export default class DevService {
    private repo : DevRepository

    constructor(repo : DevRepository) {
        this.repo = repo;
    }


    findById(id: string): Promise<IResponse> {
        throw new Error("Method not implemented.");
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

        this.populateProfile(dev.githubUsername, dev.id)

        return res
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
