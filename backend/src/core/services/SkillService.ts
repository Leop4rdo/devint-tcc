import SkillEntity from "@src/adapters/database/entities/SkillEntity";
import SkillRepository from "@src/adapters/database/repositories/SkillRepository";
import { AbstractService } from "./AbstractService";
export default class SkillService extends AbstractService<SkillEntity> {
    constructor(repo : SkillRepository) { super(repo)}
}