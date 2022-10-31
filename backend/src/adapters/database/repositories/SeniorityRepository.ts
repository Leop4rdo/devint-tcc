import CareerFocusEntity from "../entities/CareerFocusEntity";
import SeniorityEntity from "../entities/SeniorityEntity";
import AbstractRepository from "./AbstractRepository";

export default class SeniorityRepository extends AbstractRepository<SeniorityEntity> {
    constructor() { super(SeniorityEntity) }
}