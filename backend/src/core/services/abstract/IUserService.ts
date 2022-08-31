import IResponse from "../../../Responses/IResponse";

export default interface IUserService {
  list(): Promise<IResponse>;
}
