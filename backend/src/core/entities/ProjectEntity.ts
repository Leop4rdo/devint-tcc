import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"

@Entity('projects')
export default class ProjectEntity {
    
    @Column({ nullable : false})
    name: string
    
    @Column({ nullable : false})
    github_repo_url: string

    @Column('jsonb')
    followers: JSON
    
    @Column()
    license: String
    
    @Column()
    accept_donations: boolean
   
    @Column()
    help_wanted: boolean
   
    @Column()
    desc: string
   
    @Column()
    upvotes: number
   
    @Column()
    downvotes: number

    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}