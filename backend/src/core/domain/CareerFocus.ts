import { Timestamp } from "typeorm"
import Dev from "./Dev"
import ICareerProps from "./interfaces/ICareerFocus"

export default class CareerFocus {
    id: string    
    name: string    
    dev: Dev
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : ICareerProps) {
        Object.assign(this, props)
    }
}