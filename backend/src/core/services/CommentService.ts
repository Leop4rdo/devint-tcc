import CommentEntity from "@entities/CommentEntity";
import IRepository from "@repositories/IRepository";
import CommentRepository from "@src/adapters/database/repositories/CommentRepository";
import BadRequestResponse from "@src/application/Responses/BadRequestResponse";
import IResponse from "@src/application/Responses/IResponse";
import SuccessResponse from "@src/application/Responses/SuccessResponse";
import errors from "@src/helpers/errors";
import AddCommentInput from "@src/ports/input/posts/AddCommentInput";
import CommentOutput from "@src/ports/output/posts/CommentOutput";
import DevMinimalOutput from "@src/ports/output/user/DevMinimalOutput";
import Comment from "../domain/Comment";
import ICommentProps from "../domain/interfaces/IComment";
import IDevProps from "../domain/interfaces/IDev";

export default class CommentService {
    private _ : CommentRepository

    constructor(repo : CommentRepository) {
        this._ = repo
    }

    async create(input : AddCommentInput, postId : string, writterId : string) : Promise<IResponse> {
        const comment = new Comment({
            content : input.content,
            post : { id : postId },
            writter : { id : writterId }
        } as unknown as ICommentProps)
        
        return new SuccessResponse({
            status : 201,
            data : await this._.create(comment)
        })
    }

    async toggleHeart(commentId: string, userId: string) {
        const comment = await this._.findById(commentId)

        if (!comment)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        if (comment.hearts.includes(userId))
            comment.hearts = comment.hearts.filter((sourceId) => sourceId != userId)
        else {
            comment.hearts.push(userId)
        }

        await this._.update(comment)

        return new SuccessResponse({
            status: 200,
            data: new CommentOutput(comment, userId)
        })
    }

    async addAnswer(input : AddCommentInput, commentId : string, writter : IDevProps) : Promise<IResponse> {
        const comment = await this._.findById(commentId)

        if (!comment)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        const answer = {
            content : input.content,
            writter: new DevMinimalOutput(writter)
        }

        comment.answers.push(answer)

        this._.update(comment)

        return new SuccessResponse({
            status : 201,
            data : comment
        })
    }
}