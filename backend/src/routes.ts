import { Request, Response, Router } from "express";

const routes = Router();

routes.get('/health-check', (req : Request, res : Response) => res.json({message: 'Api is working properly!'}));

export default routes