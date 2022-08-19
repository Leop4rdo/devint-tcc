import { Request, Response, Router } from "express";
import userRouter from "./routes/UserRoutes";

const routes = Router();

routes.get('/health-check', (req : Request, res : Response) => res.json({message: 'Api is working properly!'}));

routes.use("/", userRouter)

export default routes