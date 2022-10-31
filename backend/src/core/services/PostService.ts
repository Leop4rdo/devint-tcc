import PostRepository from "@repositories/PostRepository"
import PostCreateInput from "@ports/input/posts/PostCreateInput"
import IPostProps from "../domain/interfaces/IPost"
import Post from "../domain/Post"
import ServerErrorResponse from "@src/application/Responses/ServerErrorResponse"
import errors from "@src/helpers/errors"
import SuccessResponse from "@src/application/Responses/SuccessResponse"
import AddCommentInput from "@ports/input/posts/AddCommentInput"
import BadRequestResponse from "@src/application/Responses/BadRequestResponse"
import PostListOutput from "@ports/output/posts/PostListOutput"
import DevMinimalOutput from "@ports/output/user/DevMinimalOutput"
import IDevProps from "../domain/interfaces/IDev"
import IResponse from "@src/application/Responses/IResponse"
import PostEntity from "@src/adapters/database/entities/PostEntity"
import PaginateListInput from "@ports/input/PaginateListInput"
import PostOutput from "@ports/output/posts/PostOutput"

export default class PostService {
    _: PostRepository

    constructor(repo: PostRepository) {
        this._ = repo
    }

    async getById(id: string, devId : string): Promise<IResponse> {
        const post = await this._.findById(id)

        if (!post)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        const res = new PostOutput(post, devId)

        return new SuccessResponse({
            data: res
        })
    }

    async getByWritter(id: string): Promise<IResponse> {
        const posts = await this._.findByWritter(id)

        if (!posts)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        const res = posts.map(post => new PostListOutput(post, id));

        return new SuccessResponse({
            data: res
        })
    }

    async create(postInput: PostCreateInput, owner: string) {
        postInput.validate()

        const post = await this._.create(new Post({
            ...postInput,
            writter: { id: owner },
            order : Math.floor(Math.random() * 999999)
        } as unknown as IPostProps) as PostEntity)

        if (!post)
            return new ServerErrorResponse({ message: errors.CAN_NOT_CREATE_ENTITY })
        else
            return new SuccessResponse({ status: 201, message: 'Post created successfully', data: { id: post.id, writter: post.writter, content: post.content, attachments: post.attachments } })
    }

    async toggleHeart(postId: string, userId: string) {
        const post = await this._.findById(postId)

        if (!post)
            return new BadRequestResponse({ message: errors.ENTITY_NOT_FOUND })

        if (post.hearts.includes(userId))
            post.hearts.filter((id) => id != userId)
        else 
            post.hearts.push(userId)
        
        await this._.update(post)

        return new SuccessResponse({
            status: 200,
            data: new PostListOutput(post, userId)
        })
    }

    async list(userId : string, filter ?: PaginateListInput) {
        const posts = await this._.listByFilters(filter)

        const mapped = posts.map(( post : Post ) => new PostListOutput(post, userId))

        return new SuccessResponse({ data: mapped })
    }
}
