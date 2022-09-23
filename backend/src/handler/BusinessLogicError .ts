import IResponse from "../Responses/IResponse";

export default class BusinessLogicError extends Error {
  message : string;
  status : number
  errors : any 

  constructor(data, message ?: string, status ?: number) {
    super(message || "")
    this.message = message || ""
    this.status = status || 400;
    this.errors = data
  }
}
