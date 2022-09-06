import { Request, Response, Router } from "express";
import authMiddleware from "./middlewares/auth.middleware";
import userRouter from "./routes/UserRoutes";

const routes = Router();

routes.get('/health-check', (req : Request, res : Response) => res.json({message: 'Api is working properly!'}));

// public routes
routes.use("/", userRouter)

routes.use(authMiddleware)

// secure routes

export default routes