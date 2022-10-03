import PostRepository from "@src/adapters/database/repositories/PostRepository";
import PostService from "@src/core/services/PostService";
import AddCommentInput from "@src/ports/input/posts/AddCommentInput";
import PostCreateInput from "@src/ports/input/posts/PostCreateInput";
import { Request, Response } from "express";

export default class PostController {
    private repo : PostRepository
    private service : PostService

    constructor() {
        this.repo = new PostRepository()
        this.service = new PostService(this.repo)
    }

    create = (req : Request, res : Response) => {
        console.log(this)

        this.service.create(new PostCreateInput(req.body), req.body.userData.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    addComment = (req : Request, res : Response) => {
        this.service.addComment(new AddCommentInput(req.body), req.params.postId, req.body.userData)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    list = (req : Request, res : Response) => {
        this.service.list()
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }
}
