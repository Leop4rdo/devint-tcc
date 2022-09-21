import { Request, Response, Router } from "express";
import BusinessLogicError from "./handler/BusinessLogicError ";
import authMiddleware from "./middlewares/auth.middleware";
import userRouter from "./routes/UserRoutes";

const routes = Router();

routes.get('/health-check', (req : Request, res : Response) => res.json({message: 'Api is working properly!'}));

routes.get("/throw-error", (req : Request, res : Response) => {
  try {
    throw new BusinessLogicError({
      errorMessage : "error error error many errors"
    })
  } catch (err) {
    res.status(501).send(err.message)
  }
})

// public routes
routes.use("/", userRouter)

// routes.use(authMiddleware)


// secure routes

export default routes