import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import CommentEntity from "./CommentEntity";
import DevEntity from "./DevEntity";
import ProjectEntity from "./ProjectEntity";

@Entity('posts')
export default class PostEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
        
    @Column()
    content: string
      
    @Column('jsonb', { default : []})
    reports: JSON
    
    @OneToMany(() => CommentEntity, (comment) => comment.post, { eager : true })
    comments : CommentEntity[]
    
    @Column('jsonb', { default : []})
    hearts : JSON
    
    @Column('jsonb', {default : []})
    attachments: JSON

    @Column()
    order : number
    
    @ManyToOne(() => ProjectEntity, (project) => project.posts, { nullable : true })
    project : ProjectEntity

    @ManyToOne(() => DevEntity, (writter) => writter.posts, { eager : true})
    writter: DevEntity
    
    @CreateDateColumn({ name : 'created_at'})
    createdAt : Timestamp
      
    @UpdateDateColumn({ name : 'updated_at'})
    updateAt : Timestamp
}
