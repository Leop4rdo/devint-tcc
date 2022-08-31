import { Router } from "express";
import AuthController from "../controllers/AuthController";
import UserController from "../controllers/UserController";

const userRouter = Router();
const userCtrl = new UserController();
const authCtrl = new AuthController();

userRouter.post("/auth", authCtrl.login)
userRouter.post("/users", authCtrl.create)
userRouter.get("/users", userCtrl.list)
// userRouter.get("/users/:userId", ctrl.getById);
// userRouter.post("/users", ctrl.create);
// userRouter.put("/users/:userId", ctrl.update);

export default userRouter;