import PaginateListInput from "@src/ports/input/PaginateListInput";import { write } from "fs";
 import { AppDataSource } from "../data-source";
import PostEntity from "../entities/PostEntity";
import AbstractRepository from "./AbstractRepository"

interface PostFilters extends PaginateListInput {
    writter ?: string
    project ?: string
    order ?: 'RANDOM' | 'LATEST' | 'TRENDING'
}

export default class PostRepository extends AbstractRepository<PostEntity> {
    constructor() {
        super(PostEntity);
    }

    async listByFilters(filters : PostFilters): Promise<PostEntity[]> {
        console.log(filters)
    
        const query = this.db.createQueryBuilder('posts')
            .innerJoinAndSelect('posts.writter', 'devs')
            .leftJoinAndSelect('posts.project', 'projects')
            .leftJoinAndSelect('posts.comments', 'comments')
        
        if (filters.writter)
            query.where('devs.id = :writterId', { writterId : filters.writter });
        else if (filters.project)
            query.where('projects.id = :projectId', { projectId : filters.project });
        
        return query
            .orderBy(this.getOrderQuery(filters.order), "DESC")
            .limit(filters.limit)
            .offset(filters.offset)
            .getMany()
    }

    private getOrderQuery (order?: string){

        switch ((order||'').toUpperCase()) {
            
            case 'LATEST':
                order = 'posts.createdAt'
                break;
            case 'TRENDING':
                order = 'posts.hearts'
                break;
            default:
                order = 'posts.order'
                break;
        }

        return order
    }
}
