import CommentRepository from "@src/adapters/database/repositories/CommentRepository"
import CommentService from "@src/core/services/CommentService"
import AddCommentInput from "@src/ports/input/posts/AddCommentInput"
import { Request, Response } from "express"

export default class CommentController {
    private repo : CommentRepository
    private service : CommentService

    constructor() {
        this.repo = new CommentRepository()
        this.service = new CommentService(this.repo)
    }

    create = (req : Request, res : Response) => {
        this.service.create(new AddCommentInput(req.body), req.params.postId, req.body.userData.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    addHeart = (req: Request, res: Response) => {
        this.service.addHeart(req.params.id, req.body.userData.id)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }

    addAnswer = (req : Request, res : Response) => {
        this.service.addAnswer(new AddCommentInput(req.body), req.params.id, req.body.userData)
            .then((_res) => res.status(_res.status || 200).json(_res))
            .catch((err) => res.status(err.status || 500).json(err))
    }
}