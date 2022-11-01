import {Router} from "express"
import SeniorityController  from "../controllers/SkillController"

const seniorityRoutes = Router()
const ctrl = new SeniorityController

seniorityRoutes.post('/seniority', ctrl.create)
seniorityRoutes.get('/seniority', ctrl.list)

export default seniorityRoutes  