import ICommentProps from "./IComment";
import IDevProps from "./IDev";

export default interface IPostProps {
	id?: string;
	content: string;
	reports: JSON;
	comments: ICommentProps[];
	hearts: JSON;
	order : number
	attachments: JSON
	writter: IDevProps;
}
