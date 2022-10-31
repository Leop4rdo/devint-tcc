import ICommentProps from "./IComment";
import IDevProps from "./IDev";
import IProjectProps from "./IProject";

export default interface IPostProps {
	id?: string;
	content: string;
	reports: JSON;
	comments: ICommentProps[];
	hearts: JSON;
	order : number
    project : IProjectProps
	attachments: JSON
	writter: IDevProps;
}
