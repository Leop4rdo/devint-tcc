import PostRepository from "@repositories/PostRepository"
import PostCreateInput from "@ports/input/posts/PostCreateInput"
import IPostProps from "../domain/interfaces/IPost"
import Post from "../domain/Post"
import ServerErrorResponse from "@src/application/Responses/ServerErrorResponse"
import errors from "@src/helpers/errors"
import SuccessResponse from "@src/application/Responses/SuccessResponse"
import AddCommentInput from "@src/ports/input/posts/AddCommentInput"
import BadRequestResponse from "@src/application/Responses/BadRequestResponse"
import PostOutput from "@src/ports/output/posts/PostOutput"
import DevMinimalOutput from "@src/ports/output/user/DevMinimalOutput"
import IDevProps from "../domain/interfaces/IDev"
import IResponse from "@src/application/Responses/IResponse"
import PostEntity from "@src/adapters/database/entities/PostEntity"

export default class PostService {
    _: PostRepository

    constructor(repo: PostRepository) {
        this._ = repo
    }

    async getById(id: string): Promise<IResponse> {
        const post = await this._.findById(id)

        if (!post)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        const res = new PostOutput(post)

        return new SuccessResponse({
            data: res
        })
    }

    async getByWritter(id: string): Promise<IResponse> {
        const posts = await this._.findByWritter(id)

        if (!posts)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        const res = posts.map(post => new PostOutput(post));

        return new SuccessResponse({
            data: res
        })
    }

    async create(postInput: PostCreateInput, owner: string) {
        postInput.validate()

        const post = await this._.create(new Post({
            ...postInput,
            writter: { id: owner }
        } as unknown as IPostProps))

        if (!post)
            return new ServerErrorResponse({ message: errors.CAN_NOT_CREATE_ENTITY })
        else
            return new SuccessResponse({ status: 201, message: 'Post created successfully', data: { id: post.id, writter: post.writter, content: post.content, attachments: post.attachments } })
    }

    async addComment(comment: AddCommentInput, postId: string, writter: any) {
        const post = await this._.findById(postId)

        if (!post)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        const commentBody = {
            ...comment,
            writter: new DevMinimalOutput(writter as IDevProps)
        }

        post.comments.push(commentBody)

        await this._.update(post)

        return new SuccessResponse({
            status: 201,
            data: post
        })
    }

    async addHeart(postId: string, userId: string) {
        const post = await this._.findById(postId)

        if (!post)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        if (post.hearts.includes(userId))
            return new SuccessResponse({ status: 200, message: 'You already gave a heart in this post' })

        post.hearts.push(userId)

        await this._.update(post)

        return new SuccessResponse({
            status: 200,
            data: new PostOutput(post)
        })
    }

    async list() {
        const posts = await this._.list()

        const mapped = posts.map((_post_: Post) => {
            console.log('writter ->', _post_.writter)
        })

        return new SuccessResponse({ data: mapped })
    }
}
