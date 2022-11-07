import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import DevEntity from "./DevEntity"

@Entity('articles')
export default class ArticleEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ nullable : false})
    title: string
    
    @Column({ nullable : false})
    content: string
    
    @Column('jsonb', { name : 'up_votes'})
    upVotes: JSON 
    
    @Column('jsonb', { name : 'down_votes'})
    downVotes: JSON
    
    @Column('jsonb')
    comments: JSON
    
    @ManyToOne(()=> DevEntity, (dev) => dev.articles)
    @JoinColumn()
    writter : DevEntity

    @CreateDateColumn({ name: 'created_at' })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp

}