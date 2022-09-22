import IResponse from "./IResponse";

export default class BadRequestResponse implements IResponse  {
    status: number;
    hasError: boolean;
    errors: any | any[];
    message: string;

    constructor(props: IResponse) {
        this.status = props.status | 400;
        this.hasError = true
        this.errors = props.errors;
        this.message = props.message;
    }
}