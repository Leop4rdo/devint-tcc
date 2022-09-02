import DevEntity from "../../../core/entities/DevEntity";
import IRepository from "./IRepository";

export default interface IDevRepository extends IRepository<DevEntity> {
    findByAuthId : (id : string) => Promise<DevEntity>
}