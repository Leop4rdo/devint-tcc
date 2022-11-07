import PaginateListInput from "@src/ports/input/PaginateListInput";import { write } from "fs";
 import { AppDataSource } from "../data-source";
import PostEntity from "../entities/PostEntity";
import AbstractRepository from "./AbstractRepository"

interface PostFilters extends PaginateListInput {
    writter ?: string
}

export default class PostRepository extends AbstractRepository<PostEntity> {
    constructor() {
        super(PostEntity);
    }

    async listByFilters(filters : PostFilters): Promise<PostEntity[]> {
        return await this.db.createQueryBuilder('posts')
            .innerJoinAndSelect('posts.writter', 'devs')
            .leftJoinAndSelect('posts.comments', 'comments')
            .where((filters.writter) ? 'devs.id = :writterId' : '', { writterId : filters.writter })
            .orderBy("posts.order")
            .limit(filters.limit)
            .offset(filters.offset)
            .getMany()
    }
}
