import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import DevEntity from "./DevEntity";

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
    
    @Column('jsonb')
    attachments: JSON
      
    @ManyToOne(() => DevEntity, (writter) => writter.posts)
    writter: DevEntity
    
    @CreateDateColumn({select:false, name : 'created_at'})
    createdAt : Timestamp
      
    @UpdateDateColumn({name : 'updated_at'})
    updateAt : Timestamp
}
