import DevEntity from "../../../core/entities/DevEntity";
import AbstractRepository from "../abstract/AbstractRepository";

export default class DevRepository extends AbstractRepository<DevEntity> {
    constructor() { super(DevEntity); }
}