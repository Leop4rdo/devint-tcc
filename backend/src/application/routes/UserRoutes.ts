import { Router } from "express";
import AuthController from "../controllers/AuthController";
import UserController from "../controllers/UserController";
import authMiddleware from "../middlewares/auth.middleware";

const userCtrl = new UserController();
const authCtrl = new AuthController();

export const publicUserRoutes = Router();

publicUserRoutes.post("/auth", authCtrl.login)
publicUserRoutes.post("/users", authCtrl.create)
publicUserRoutes.post("/request-password-recovery", authCtrl.requestPasswordRecovery)
publicUserRoutes.patch("/change-password", authCtrl.changePassword)
publicUserRoutes.patch("/confirm-email",authCtrl.emailConfirm)

export const securedUserRoutes = Router();

securedUserRoutes.patch("/disable/:userId", authCtrl.disable)
securedUserRoutes.patch("/enable/:userId", authCtrl.enable)
securedUserRoutes.get("/", userCtrl.list)
securedUserRoutes.get("/", userCtrl.getById);
