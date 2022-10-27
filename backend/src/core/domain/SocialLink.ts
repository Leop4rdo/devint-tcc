import { Timestamp } from "typeorm";
import ISocialLinkProps from "@src/core/domain/interfaces/ISocialLink";
import Dev from "./Dev";

export default class socialLink {
    id: string
    name: string
    url: string
    owner : Dev
    createdAt : Timestamp
    updatedAt : Timestamp

    constructor(props : ISocialLinkProps) {
        Object.assign(this, props)
    }
}