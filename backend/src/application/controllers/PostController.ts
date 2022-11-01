import PostRepository from "@src/adapters/database/repositories/PostRepository";
import PostService from "@src/core/services/PostService";
import PaginateListInput from "@src/ports/input/PaginateListInput";
import AddCommentInput from "@src/ports/input/posts/AddCommentInput";
import PostCreateInput from "@src/ports/input/posts/PostCreateInput";
import { Request, Response } from "express";

export default class PostController {
    private repo: PostRepository
    private service: PostService

    constructor() {
        this.repo = new PostRepository()
        this.service = new PostService(this.repo)
    }

    getById = (req: Request, res: Response) => {
        this.service.getById(req.params.postId, req.body.userData.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    getByWritter = (req: Request, res: Response) => {
        this.service.getByWritter(req.params.userId, new PaginateListInput(req.query))
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    create = (req: Request, res: Response) => {
        this.service.create(new PostCreateInput(req.body), req.body.userData.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    list = (req: Request, res: Response) => {
        this.service.list(req.body.userData.id, new PaginateListInput(req.query))
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    toggleHeart = (req: Request, res: Response) => {
        this.service.toggleHeart(req.params.postId, req.body.userData.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }
}
