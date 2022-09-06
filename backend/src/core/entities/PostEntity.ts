import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import DevEntity from "./DevEntity";

@Entity('posts')
export default class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  content: string

  @Column({})
  attachment: string[]
  
  @Column('jsonb')
  reports: JSON

  @Column('jsonb')
  comments: JSON

  @Column('jsonb')
  upVotes: JSON

  @Column('jsonb')
  downVotes: JSON

  @CreateDateColumn({select:false})
  createdAt : Timestamp
  
  @UpdateDateColumn({})
  updateAt : Timestamp

  @ManyToOne(() => DevEntity, (writter) => writter.posts)
  writter: DevEntity

}