import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import PostEntity from "./PostEntity";

@Entity('post_attachments')
export default class PostAttachmentEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string
  
  @Column({})
  url: string
 
  @ManyToOne(() => PostEntity, (attachment) => attachment.postAttachment)
  post: PostEntity

  @CreateDateColumn({select:false})
  createdAt : Timestamp
  
  @UpdateDateColumn({})
  updateAt : Timestamp

}
