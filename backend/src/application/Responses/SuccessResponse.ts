import IResponse from "./IResponse";

export default class SuccessResponse implements IResponse {
    status: number;
    hasError: boolean;;
    data: any;
    message : any

    constructor(props: IResponse) {
        this.status = props.status || 200;
        this.hasError = false
        this.data = props.data;
        this.message = props.message
    }
}