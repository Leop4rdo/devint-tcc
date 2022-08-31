import { createHistogram } from "perf_hooks";
import AuthEntity from "../../../core/entities/AuthEntity";
import { AppDataSource } from "../../../data-source";
import AbstractRepository from "../abstract/AbstractRepository";
import IAuthRepository from "../abstract/IAuthRepository";

export default class AuthRepository implements IAuthRepository {
    private db;

    constructor() {
        this.db = AppDataSource.getRepository<AuthEntity>(AuthEntity)
    }

    findById = async (id: string) => {
        return await this.db.findOne({
            where : {
                id
            }
        })
    };

    findBy = async (key: keyof AuthEntity, value: any) =>   {
        return this.db.findOne({
            where: {
                [key]: value
            }
        })
    }

    create = async (entity: AuthEntity) => {
        console.log(entity);

        return await this.db.create(entity);
    };

    update = async (entity: AuthEntity) => {
        return await this.db.update(entity);
    };
    
 }