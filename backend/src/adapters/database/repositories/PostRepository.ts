import { AppDataSource } from "../data-source";
import PostEntity from "../entities/PostEntity";
import AbstractRepository from "./AbstractRepository"

export default class PostRepository extends AbstractRepository<PostEntity> {
    constructor() {
        super(PostEntity);
        this.db = AppDataSource.getRepository<PostEntity>(PostEntity)
    }

    async findByWritter(_id: string): Promise<PostEntity[]> {
        return await this.db.find({
            where: {
                writter: {
                    id: _id
                }
            }
        })
    }

}
