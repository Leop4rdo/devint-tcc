import {Router} from "express"
import SkillController  from "../controllers/SkillController"

const skillRoutes = Router()
const ctrl = new SkillController

skillRoutes.post('/skills', ctrl.create)
skillRoutes.get('/skills', ctrl.list)

export default skillRoutes