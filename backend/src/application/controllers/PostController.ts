import PostRepository from "@src/adapters/database/repositories/PostRepository";
import PostService from "@src/core/services/PostService";
import PostCreateInput from "@src/ports/input/posts/PostCreateInput";
import { Request, Response } from "express";

export default class PostController {
    private repo : PostRepository
    private service : PostService

    constructor() {
        this.repo = new PostRepository()
        this.service = new PostService(this.repo)
    }

    create(req : Request, res : Response) {
        this.service.create(new PostCreateInput(req.body), req.params.devId)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }
}