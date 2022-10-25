import { writeHeapSnapshot } from "v8"

export default class DevFollowInput{
    source : string 
    target : string 

    constructor(source: string, target: string){
        this.source = source
        this.target = target
    }
}