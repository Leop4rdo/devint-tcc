import IResponse from "../../../Responses/IResponse";
import DevCreateRequestDTO from "../../dtos/user/dev/DevCreateRequestDTO";

export interface IDevService {
    list() : Promise<IResponse> 

    findById(id : string) : Promise<IResponse>

    create(entity : DevCreateRequestDTO) : Promise<IResponse>

    // update(entity :, id : string) : Promise<IResponse>

    // delete(id : string) : Promise<IResponse>
}