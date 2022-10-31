import {Router} from "express";
import DevController from "../controllers/DevController";

const devRouter = Router()
const ctrl = new DevController();

devRouter.get('/', ctrl.listByFilters)
devRouter.patch('/:devId/toggle-follow', ctrl.toggleFollow)
devRouter.put('/:devId', ctrl.update)
// devRouter.post('/:devId/create-skill', ctrl.create)
// devRouter.get('/:devId/skills', ctrl.list)
// devRouter.post('/:devId/create-senior', ctrl.create)
// devRouter.get('/:devId/senior', ctrl.list)
// devRouter.post('/:devId/create-career-focus', ctrl.create)
// devRouter.get('/:devId/career-focus', ctrl.listCareer)


export default devRouter;
