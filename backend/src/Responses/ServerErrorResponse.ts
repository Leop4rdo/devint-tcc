import IResponse from "./IResponse";

export default class ServerErrorResponse implements IResponse  {
    status: number;
    hasError: boolean;
    errorCode: string;
    errorMessage: string;

    constructor(props: IResponse) {
    
        this.status = props.status || 500;
        this.hasError = true;
        this.errorCode = props.errorCode;
        this.errorMessage = props.errorMessage;
    }
}