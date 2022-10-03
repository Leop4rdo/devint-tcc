import { Router } from "express";
import PostController from "../controllers/PostController";

const postRouter = Router()
const ctrl = new PostController()

console.log(ctrl)

postRouter.get('/posts/', ctrl.list)
postRouter.get('/posts/:postId', ctrl.getById)
postRouter.post('/posts/', ctrl.create);
postRouter.post('/posts/:postId/comment', ctrl.addComment)
postRouter.get('/users/:userId/posts', ctrl.getByWritter)

export default postRouter
