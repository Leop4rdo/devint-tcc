import { Router } from "express";
import AuthController from "@controllers/AuthController";
import UserController from "@controllers/UserController";

const userCtrl = new UserController();
const authCtrl = new AuthController();

export const publicUserRoutes = Router();

publicUserRoutes.post("/auth", authCtrl.login)
publicUserRoutes.post("/users", authCtrl.create)
publicUserRoutes.post("/request-password-recovery", authCtrl.requestPasswordRecovery)
publicUserRoutes.patch("/change-password", authCtrl.changePassword)
publicUserRoutes.patch("/email-confirm", authCtrl.emailConfirm)

export const securedUserRoutes = Router();

securedUserRoutes.patch("/users/disable/:userId", authCtrl.disable)
securedUserRoutes.patch("/users/enable/:userId", authCtrl.enable)
securedUserRoutes.get("/users", userCtrl.list)
securedUserRoutes.get("/users/:userId", userCtrl.getById);
