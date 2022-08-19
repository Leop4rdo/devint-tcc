import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();
const ctrl = new UserController();


userRouter.get("/users", ctrl.list)
userRouter.get("/users/:userId", ctrl.getById);
userRouter.post("/users", ctrl.create);
userRouter.put("/users/:userId", ctrl.update);
// userRouter.post("/auth", ctrl.login)

export default userRouter;