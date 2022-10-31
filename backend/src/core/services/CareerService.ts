import CareerFocusEntity from "@src/adapters/database/entities/CareerFocusEntity";
import SkillEntity from "@src/adapters/database/entities/SkillEntity";
import CareerRepository from "@src/adapters/database/repositories/CareerRepository";
import SkillRepository from "@src/adapters/database/repositories/SkillRepository";
import { AbstractService } from "./AbstractService";
export default class CareerService extends AbstractService<CareerFocusEntity> {
    constructor(repo : CareerRepository) { super(repo)}
}