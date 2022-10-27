import { Router } from "express";
import CommentController from "../controllers/CommentController";

const commentRouter = Router()
const ctrl = new CommentController()

commentRouter.post("/posts/:postId/comments", ctrl.create)
commentRouter.patch("/comments/:id/toggle-heart", ctrl.toggleHeart)
commentRouter.patch("/comments/:id/answer", ctrl.addAnswer)

export default commentRouter 