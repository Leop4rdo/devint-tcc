import { IsString, IsNotEmpty } from "class-validator";
import AuthEntity from "../../../../adapters/database/entities/AuthEntity";
import IDevProps from "../../../../core/domain/interfaces/IDev";
import InputPort from "../../InputPort";

export default class DevCreateInput extends InputPort {
    @IsString()
    name : string;

    @IsString()
    birthday : string | Date;
    
    @IsNotEmpty()
    auth : AuthEntity

    @IsNotEmpty()
    gender : string 

    @IsString()
    githubUsername : string

    constructor(props : IDevProps) {
        super()
        Object.assign(this, props)
    }
}