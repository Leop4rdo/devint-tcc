import {Router} from "express"
import SeniorityController  from "../controllers/SkillController"

const seniorityRoutes = Router()
const ctrl = new SeniorityController

seniorityRoutes.post('/', ctrl.create)
seniorityRoutes.get('/', ctrl.list)

export default seniorityRoutes  