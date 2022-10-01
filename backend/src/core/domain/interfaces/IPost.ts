import IDevProps from "./IDev";

export default interface IPostProps {
	id?: string;
	content: string;
	reports: JSON;
	comments: JSON;
	hearts: JSON;
	attachments: JSON
	writter: IDevProps;
}
