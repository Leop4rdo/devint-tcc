import { Repository } from "typeorm"
import { AppDataSource } from "../../../data-source"
import IRepository from "./IRepository"

export default abstract class AbstractRepository<T> implements IRepository<T> {
    protected db: Repository< T | any>

    constructor(repo: any) {
        this.db = AppDataSource.getRepository<T>(repo)
    }

    async update(id : string, entity: T) { return await this.db.update({ id }, entity)}

    async create(entity: T) { return await this.db.save(entity)}

    async list() { return await this.db.find()}

    async remove(id:string) { return (await this.db.delete({id})) ? true : false}
    
    async findById(id: string){
        return this.db.findOne({
            where: {
                id
            }
        })
    }

    async findBy(key: keyof T, value: any){
        return this.db.findOne({
            where: {
                [key]: value
            }
        })
    }

}
