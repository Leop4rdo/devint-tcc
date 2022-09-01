import IDevProps from "../../../interfaces/IDev"

export default class DevResponseDTO {
    id : string
    name : string
    bio : string
    gender : string
    birthday : string | Date
    following : JSON
    followers : JSON

    constructor(props : IDevProps) {
        this.id = props.id
        this.name = props.name
        this.bio = props.bio
        this.gender = props.gender
        this.birthday = props.birthday
        this.following = props.following
        this.followers = props.followers
    }
}