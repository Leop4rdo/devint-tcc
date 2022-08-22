import errors from "./errors.handler";
import IResponse from "../Responses/IResponse";

export default class BusinessLogicError extends Error {
  errorMessage: string;
  errorCode: string;
  status: number;

  constructor(props: IResponse) {
    super(props.errorMessage);
    this.errorMessage = props.errorMessage;
    this.errorCode = props.errorCode;
    this.status = 400;
  }
}
