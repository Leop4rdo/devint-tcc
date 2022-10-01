import { Router } from "express";
import PostController from "../controllers/PostController";

const postRouter = Router()
const ctrl = new PostController()

postRouter.post('/', ctrl.create);

export default postRouter