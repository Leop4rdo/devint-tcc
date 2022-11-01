import {Router} from "express"
import CareerController  from "../controllers/CareerController"

const careerFocusRoutes = Router()
const ctrl = new CareerController

careerFocusRoutes.post('/', ctrl.create)
careerFocusRoutes.get('/', ctrl.list)

export default careerFocusRoutes