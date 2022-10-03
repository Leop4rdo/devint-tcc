import { Router } from "express";
import PostController from "../controllers/PostController";

const postRouter = Router()
const ctrl = new PostController()

console.log(ctrl)

postRouter.get('/', ctrl.list)
postRouter.post('/', ctrl.create);
postRouter.post('/:postId/comment', ctrl.addComment)

export default postRouter
