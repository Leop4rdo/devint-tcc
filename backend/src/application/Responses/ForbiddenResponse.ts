import errors from "../../helpers/errors";
import IResponse from "./IResponse";

export default class forbiddenResponse implements IResponse  {
    status: number;
    hasError: boolean;
    message: string;

    constructor() {
        this.status = 403;
        this.hasError = true
        this.message = errors.NOT_AUTHENTICATED;
    }
}