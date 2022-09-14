import { Router } from "express";
import AuthController from "../controllers/AuthController";
import UserController from "../controllers/UserController";
import authMiddleware from "../middlewares/auth.middleware";

const userRouter = Router();
const userCtrl = new UserController();
const authCtrl = new AuthController();

userRouter.post("/auth", authCtrl.login)
userRouter.post("/users", authCtrl.create)
userRouter.post("/request-password-recovery", authCtrl.requestPasswordRecovery)

userRouter.use(authMiddleware)

userRouter.patch("users/disable/:userId", authCtrl.disable)
userRouter.patch("users/enable/:userId", authCtrl.enable)
userRouter.get("/users", userCtrl.list)
userRouter.get("/users/:userId", userCtrl.getById);

// userRouter.put("/users/:userId", ctrl.update);

export default userRouter;