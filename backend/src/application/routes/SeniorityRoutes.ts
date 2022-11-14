import {Router} from "express"
import SeniorityController  from "../controllers/SeniorityController"

const seniorityRoutes = Router()
const ctrl = new SeniorityController

seniorityRoutes.post('/seniorities', ctrl.create)
seniorityRoutes.get('/seniorities', ctrl.list)

export default seniorityRoutes  