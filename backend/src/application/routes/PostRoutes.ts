import { Router } from "express";
import PostController from "../controllers/PostController";

const postRouter = Router()
const ctrl = new PostController()

postRouter.get('/', ctrl.list)
postRouter.post('/', ctrl.create);
postRouter.post('/:postId/comment', ctrl.addComment)
postRouter.patch('/:postId/add-heart', ctrl.addHeart)

export default postRouter
