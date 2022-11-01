import {Router} from "express"
import SkillController  from "../controllers/SkillController"

const skillRoutes = Router()
const ctrl = new SkillController

skillRoutes.post('/', ctrl.create)
skillRoutes.get('/', ctrl.list)

export default skillRoutes