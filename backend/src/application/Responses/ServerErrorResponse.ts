import IResponse from "./IResponse";

export default class ServerErrorResponse implements IResponse  {
    status: number;
    hasError: boolean;
    errors: string;
    message: string;

    constructor(props: IResponse) {
    
        this.status = props.status || 500;
        this.hasError = true;
        this.errors = props.errors;
        this.message = props.message;
    }
}