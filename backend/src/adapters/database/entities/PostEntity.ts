import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import DevEntity from "./DevEntity";
import PostAttachmentEntity from "./PostAttachmentEntity";

@Entity('posts')
export default class PostEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
        
    @Column()
    content: string
      
    @Column('jsonb')
    reports: JSON
    
    @Column('jsonb')
    comments: JSON
    
    @Column('jsonb')
    hearts : JSON
    
    @OneToMany(() => PostAttachmentEntity, (postAttachments) => postAttachments.post)
    postAttachment: PostAttachmentEntity[]
      
    @ManyToOne(() => DevEntity, (writter) => writter.posts)
    writter: DevEntity
    
    @CreateDateColumn({select:false, name : 'created_at'})
    createdAt : Timestamp
      
    @UpdateDateColumn({name : 'updated_at'})
    updateAt : Timestamp
}
