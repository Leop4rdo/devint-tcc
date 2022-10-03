import PostEntity from "../entities/PostEntity";
import AbstractRepository from "./AbstractRepository"

export default class PostRepository extends AbstractRepository<PostEntity> {
    constructor() { super(PostEntity) }
}
