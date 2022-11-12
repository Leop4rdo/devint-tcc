import {Router} from "express"
import CareerController  from "../controllers/CareerController"

const careerFocusRoutes = Router()
const ctrl = new CareerController

// careerFocusRoutes.post('/career-focus', ctrl.create)
careerFocusRoutes.get('/career-focus', ctrl.list)

export default careerFocusRoutes