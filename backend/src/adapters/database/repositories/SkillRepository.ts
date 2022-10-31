import SkillEntity from "../entities/SkillEntity";
import AbstractRepository from "./AbstractRepository";

export default class SkillRepository extends AbstractRepository<SkillEntity> {
    constructor() { super(SkillEntity) }
}