import PaginateListInput from "../PaginateListInput";

export  default class PostQueryFilter extends PaginateListInput {
    order ?: string

    constructor(query : any) {
        super(query)
        this.order = query.order
    }
}