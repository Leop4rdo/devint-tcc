import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import DevEntity from "./DevEntity"
import PostEntity from "./PostEntity"

@Entity('projects')
export default class ProjectEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string
    
    @Column({ nullable : false})
    name: string
    
    @Column({ nullable : false, name : 'github_repo_url'})
    githubRepoUrl: string

    @Column('jsonb')
    followers: JSON
    
    @Column()
    license: String
    
    @Column({ name : 'accept_donations'})
    acceptDonations: boolean
   
    @Column({ name : 'help_wanted'})
    helpWanted: boolean
   
    @Column()
    desc: string
   
    @Column('jsonb', { name : 'up_votes' })
    upVotes: JSON
   
    @Column('jsonb', { name : 'down_votes' })
    downVotes: JSON

    @CreateDateColumn({ name : 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}