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

  @Column('jsonb', { name : 'up_votes' })
  upVotes: JSON

  @Column('jsonb', { name: "down_votes" })
  downVotes: JSON

  @OneToMany(() => PostAttachmentEntity, (postAttachments) => postAttachments.post)
  @JoinColumn({name: 'post_attachment'}) 
  postAttachment: PostAttachmentEntity[]
  
  @ManyToOne(() => DevEntity, (writter) => writter.posts)
  writter: DevEntity

  @CreateDateColumn({select:false})
  createdAt : Timestamp
  
  @UpdateDateColumn({})
  updateAt : Timestamp

}