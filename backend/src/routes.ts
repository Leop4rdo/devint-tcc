import { Request, Response, Router } from "express";
import BusinessLogicError from "./handler/BusinessLogicError ";
import authMiddleware from "./middlewares/auth.middleware";
import { publicUserRoutes } from "./routes/UserRoutes";

const routes = Router();

// public routes -> 
routes.get('/health-check', (req : Request, res : Response) => res.json({message: 'Api is working properly!'}));
routes.use("/", publicUserRoutes)

routes.use(authMiddleware)

// secure routes ->
routes.use("/users", publicUserRoutes)

export default routes