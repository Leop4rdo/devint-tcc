import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import DevEntity from "./DevEntity"
import PostEntity from "./PostEntity"

@Entity('comments')
export default class CommentEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => DevEntity)
    writter: DevEntity

    @ManyToOne(() => PostEntity)
    post: PostEntity

    @Column()
    content: string
}

/*

id : string
writter : dev -> ManyToOne
post : post -> ManyToOne
content : string
*/
