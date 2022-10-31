import { Request, Response, Router } from "express";
import authMiddleware from "./middlewares/auth.middleware";
import commentRouter from "./routes/CommentRoutes";
import devRouter from "./routes/DevRoutes";
import postRouter from "./routes/PostRoutes";
import projectRouter from "./routes/ProjectRoutes";
import { publicUserRoutes, securedUserRoutes } from "./routes/UserRoutes";

const routes = Router();

// public routes -> 
routes.get('/health-check', (req: Request, res: Response) => res.json({ message: 'Api is working properly!' }));
routes.use("/", publicUserRoutes)

routes.use(authMiddleware)

// secure routes ->
routes.use("/users", securedUserRoutes)
routes.use("/devs", devRouter)
routes.use("/", postRouter)
routes.use("/", commentRouter)
routes.use('/', projectRouter)

export default routes
