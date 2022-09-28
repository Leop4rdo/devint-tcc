import { AppDataSource } from "../data-source";
import AuthEntity from "../entities/AuthEntity";


export default class AuthRepository {
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
        return await this.db.save(entity);
    };

    update = async (entity: AuthEntity) => {
        return await this.db.save(entity);
    };

    async remove(id:string) { return await this.db.delete({id})}
    
 }