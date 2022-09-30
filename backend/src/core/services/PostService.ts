import PostRepository from "@repositories/PostRepository"

export default class PostService {
    _ : PostRepository

    constructor(repo : PostRepository) {
        this._ = repo
    }

    async create(post : PostCreateInput) {
        post.validate()

        const createdPost = 
    }

}
