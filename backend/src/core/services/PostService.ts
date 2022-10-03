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

export default class PostService {
    _ : PostRepository

    constructor(repo : PostRepository) {
        this._ = repo
    }

    async create(postInput : PostCreateInput, owner : string) {
        postInput.validate()

        const post = await this._.create(new Post({
            ...postInput,
            writter: { id : owner }
        } as unknown as IPostProps))
    
        if (!post) 
            return new ServerErrorResponse({ message : errors.CAN_NOT_CREATE_ENTITY})
        else
            return new SuccessResponse({status : 201, message : 'Post created successfully', data : { id : post.id, writter : post.writter, content : post.content } })
    }

    async addComment(comment : AddCommentInput, postId : string, writter : any) {
        const post = await this._.findById(postId)

        if (!post) 
            return new BadRequestResponse({ message : errors.ENTITY_NOT_FOUND })

        const commentBody = {
            ...comment,
            writter : new DevMinimalOutput(writter as IDevProps)
        }

        post.comments.push(commentBody)

        await this._.update(post)

        return new SuccessResponse({
            status : 201,
            data : post 
        })
    }

    async addHeart(postId : string, userId : string) {
        const post = await this._.findById(postId)

        if (!post)
            return new BadRequestResponse({ message : errors.ENTITY_NOT_FOUND })

        if (post.hearts.includes(userId))
            return new SuccessResponse({ status : 200, message : 'You already gave a heart in this post'})
         
        post.hearts.push(userId)

        await this._.update(post)

        return new SuccessResponse({
            status : 200,
            data : new PostOutput(post)
        })
    }

    async list() {
        const posts = await this._.list()

        const mapped = posts.map((post : Post) => new PostOutput(post))

        return new SuccessResponse({ data : mapped })
    }
}