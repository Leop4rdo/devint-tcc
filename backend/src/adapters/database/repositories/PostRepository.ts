import PaginateListInput from "@src/ports/input/PaginateListInput"; import { AppDataSource } from "../data-source";
import PostEntity from "../entities/PostEntity";
import AbstractRepository from "./AbstractRepository"

export default class PostRepository extends AbstractRepository<PostEntity> {
    constructor() {
        super(PostEntity);
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

    async listByFilters(filters : PaginateListInput): Promise<PostEntity[]> {
        return await this.db.createQueryBuilder('posts')
            .innerJoinAndSelect('posts.writter', 'devs')
            .leftJoinAndSelect('posts.comments', 'comments')
            .orderBy("posts.order")
            .limit(filters.limit)
            .offset(filters.offset)
            .getMany()
    }

}
