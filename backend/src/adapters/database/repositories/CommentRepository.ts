import CommentEntity from "../entities/CommentEntity";
import AbstractRepository from "./AbstractRepository";

export default class CommentRepository extends AbstractRepository<CommentEntity> {
    constructor() { super(CommentEntity) }
}