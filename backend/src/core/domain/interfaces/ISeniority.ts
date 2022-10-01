import DevEntity from "../../../adapters/database/entities/DevEntity";
import IDevProps from "./IDev";

export default interface ISeniorityProps {
	id?: string;
	name: string;
	devs: IDevProps[];
}
