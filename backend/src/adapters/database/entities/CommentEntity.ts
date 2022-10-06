import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import DevEntity from "./DevEntity"
import PostEntity from "./PostEntity"

@Entity('comments')
export default class CommentEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => DevEntity, { eager : true })
    writter: DevEntity

    @Column('jsonb', { default : [] })
    answers : JSON

    @ManyToOne(() => PostEntity, (post) => post.comments)
    post: PostEntity

    @Column('jsonb', {default:[]})
    hearts : JSON

    @Column()
    content: string
}