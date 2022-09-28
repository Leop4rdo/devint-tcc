import { Timestamp } from "typeorm";
import DevEntity from "@entities/DevEntity";
import ISocialLinkProps from "@src/interfaces/ISocialLink";

export default class socialLink {
    id: string
    name: string
    value: string
    owner : DevEntity
    createdAt : Timestamp
    updatedAt : Timestamp
    

    constructor(props : ISocialLinkProps) {
        Object.assign(this, props)
    }
}