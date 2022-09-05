import internal from "stream"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"

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

    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}