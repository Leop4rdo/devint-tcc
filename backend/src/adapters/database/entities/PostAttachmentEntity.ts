import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import PostEntity from "./PostEntity";

@Entity('post_attachments')
export default class PostAttachmentEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({})
    uri: string
  
    @ManyToOne(() => PostEntity, (attachment) => attachment.postAttachment)
    post: PostEntity

    @CreateDateColumn({select:false, name: 'created_at' })
    createdAt : Timestamp
    
    @UpdateDateColumn({ name : 'updated_at' })
    updateAt : Timestamp

}
