import PaginateListInput from "../PaginateListInput";

export default class UserQueryFilter extends PaginateListInput {
    search ?: string
    sort ?: string

    constructor(props : any) {
        super(props)
        this.search = props.search
        this.sort = props.sort 
    }
}