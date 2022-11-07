import IDevMinimal from "./IDev"

export default interface IComment {
    id: string
    content: string
    writter: IDevMinimal
    hearts : number
    answers : {
        content : string
        writter : IDevMinimal
    }[]
    alreadyHearted : boolean
}

