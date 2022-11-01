import SeniorityEntity from "@src/adapters/database/entities/SeniorityEntity";
import SkillEntity from "@src/adapters/database/entities/SkillEntity";
import SeniorityRepository from "@src/adapters/database/repositories/SeniorityRepository";
import SkillRepository from "@src/adapters/database/repositories/SkillRepository";
import { AbstractService } from "./AbstractService";
export default class SeniorityService extends AbstractService<SeniorityEntity> {
    constructor(repo : SeniorityRepository) { super(repo)}
}