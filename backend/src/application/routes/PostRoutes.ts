import { Router } from "express";
import PostController from "../controllers/PostController";

const postRouter = Router()
const ctrl = new PostController()

postRouter.get('/posts/', ctrl.list)
postRouter.get('/posts/:postId', ctrl.getById)
postRouter.post('/posts/', ctrl.create);
postRouter.get('/devs/:userId/posts', ctrl.getByWritter)
postRouter.patch('/posts/:postId/toggle-heart', ctrl.toggleHeart)

export default postRouter
