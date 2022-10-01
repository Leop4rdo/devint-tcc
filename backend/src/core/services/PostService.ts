import PostRepository from "@repositories/PostRepository"
import PostCreateInput from "@ports/input/posts/PostCreateInput"
import IPostProps from "../domain/interfaces/IPost"
import Post from "../domain/Post"
import ServerErrorResponse from "@src/application/Responses/ServerErrorResponse"
import errors from "@src/helpers/errors"
import SuccessResponse from "@src/application/Responses/SuccessResponse"

export default class PostService {
    _ : PostRepository

    constructor(repo : PostRepository) {
        this._ = repo
    }

    async create(postInput : PostCreateInput, owner : string) {
        postInput.validate()

        const post = await this._.create(new Post({
            ...postInput,
            owner: owner
        } as unknown as IPostProps))
    
        if (!post) 
            return new ServerErrorResponse({ message : errors.CAN_NOT_CREATE_ENTITY})
        else
            return new SuccessResponse({status : 201, message : 'Entity created successfully', data : post})
    }
}
