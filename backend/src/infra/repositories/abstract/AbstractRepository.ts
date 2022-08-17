import { AppDataSource } from "../../../data-source"
import IRepository from "./IRepository"

export default abstract class AbstractRepository<T> implements IRepository<T> {
    private _: any

    constructor(repo: any) {
        this._ = AppDataSource.getRepository<T>(repo)
    }

    update = async (entity: T) => await this._.save(entity)

    create = async (entity: T) => await this._.save(entity)

    list = async () => await this._.find()

    remove = async (id:string) => await this._.delete({id})
    
    findById = async (id: string) => {
        return this._.findOne({
            where: {
                id
            }
        })
    }

    findBy = async (key: keyof T, value: any) => {
        return this._.findOne({
            where: {
                [key]: value
            }
        })
    }

}