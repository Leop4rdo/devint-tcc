import { Timestamp } from "typeorm"
import DevEntity from "../../adapters/database/entities/DevEntity"

export default class CareerFocus {
    id: string    
    name: string    
    dev: DevEntity
    createdAt : Timestamp
    updatedAt : Timestamp
}