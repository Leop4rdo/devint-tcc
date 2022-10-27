import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import PostEntity from "./PostEntity"

@Entity('projects')
export default class ProjectEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column({ nullable : false})
    name: string

    @Column({ nullable : true, name : 'banner_uri' })
    bannerURI : string
    
    @Column('jsonb', { nullable : true, name : 'github_repo'})
    githubRepo: JSON

    @Column({ default : 'All rights reserved'})
    license: String
    
    @Column({ name : 'help_wanted'})
    helpWanted: boolean
   
    @Column()
    desc: string

    @OneToMany(() => PostEntity, (post) => post.project)
    posts : PostEntity[]
   
    @Column('jsonb')
    hearts : JSON

    @CreateDateColumn({ name : 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}
