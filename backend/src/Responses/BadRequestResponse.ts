import IResponse from "./IResponse";

export default class BadRequestResponse implements IResponse  {
    status: number;
    hasError: boolean;
    errorCode: string;
    errorMessage: string | object | object[];

    constructor(props: IResponse) {
    
        this.status = props.status || 430;
        this.hasError = true;
        this.errorCode = props.errorCode;
        this.errorMessage = props.errorMessage;
    }
}