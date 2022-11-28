import IPostProps from "@domains/interfaces/IPost";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";
import InputPort from "../InputPort";

export default class PostCreateInput extends InputPort {
    @IsString()
    @IsNotEmpty()
    content : string
    
    attachments: JSON

    project : {
        id : string
    }

    constructor(props : IPostProps) {
        super()
        Object.assign(this, props)
    }
}

