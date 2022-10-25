
export default class BusinessLogicError extends Error {
  message : string;
  hasError : boolean;
  status : number
  errors : any 

  constructor(data, message ?: string, status ?: number) {
    super(message || "")
    this.hasError = true
    this.message = message || ""
    this.status = status || 400;
    this.errors = data
  }
}
