import IResponse from "../../../Responses/IResponse";

export default interface IUserService {
  list(): Promise<IResponse>;

  getById(id : string) : Promise<IResponse>
}
