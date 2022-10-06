import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import CommentEntity from "./CommentEntity";
import DevEntity from "./DevEntity";

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
    
    @Column('jsonb')
    attachments: JSON
      
    @ManyToOne(() => DevEntity, (writter) => writter.posts, { eager : true})
    writter: DevEntity
    
    @CreateDateColumn({select:false, name : 'created_at'})
    createdAt : Timestamp
      
    @UpdateDateColumn({name : 'updated_at'})
    updateAt : Timestamp
}
