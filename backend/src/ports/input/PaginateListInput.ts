export default class PaginateListInput {
    offset ?: number
    limit ?: number

    constructor(query : any) {
        this.offset = +query.offset || null
        this.limit = +query.limit || null
    }
}