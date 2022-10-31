import CareerFocusEntity from "../entities/CareerFocusEntity";
import AbstractRepository from "./AbstractRepository";

export default class CareerRepository extends AbstractRepository<CareerFocusEntity> {
    constructor() { super(CareerFocusEntity) }
}