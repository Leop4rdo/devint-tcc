import AuthController from "../../../../controllers/AuthController";
import AuthEntity from "../../../entities/AuthEntity";
import IDevProps from "../../../interfaces/IDev";

export default class DevCreateRequestDTO {
    name : string;
    birthday : string | Date;
    auth : AuthEntity

    constructor(props : IDevProps) {
        this.name = props.name;
        this.birthday = props.birthday;
        this.auth = props.auth;
    }
}