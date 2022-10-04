import { AppDataSource } from "../data-source";
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

    override async list(): Promise<PostEntity[]> {
        // user query builder para selecionar em ordem aleatoria
        // todos os posts

        // extra : paginação

        return await this.db.createQueryBuilder('posts')
            .innerJoin("posts.writter", "devs")
            .orderBy("RANDOM()")
            .getMany()

    }

}
