import {Router} from "express";
import DevController from "../controllers/DevController";

const devRouter = Router()
const ctrl = new DevController();

devRouter.get('/', ctrl.listByFilters)
devRouter.patch('/dev/:devId/toggle-follow', ctrl.toggleFollow)

export default devRouter;
