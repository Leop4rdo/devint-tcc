import IDevProps from "./IDev";

export default interface ISocialLinkProps {
	id?: string;
	name: string;
	url: string;
	owner: IDevProps;
}
