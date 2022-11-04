import {Router} from "express";
import DevController from "../controllers/DevController";

const devRouter = Router()
const ctrl = new DevController();

devRouter.get('/devs', ctrl.listByFilters)
devRouter.patch('/devs/:devId/toggle-follow', ctrl.toggleFollow)
devRouter.put('/devs/:devId', ctrl.update)
devRouter.get('/devs/:id', ctrl.findById)

export default devRouter;
