import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import DevEntity from "./DevEntity"
import PostEntity from "./PostEntity"

@Entity('projects')
export default class ProjectEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column({ nullable : false})
    name: string

    @Column({ nullable : true, name : 'banner_uri' })
    bannerURI : string
    
    @Column({ nullable : false, name : 'github_repo'})
    githubRepo: string

    @Column({ default : 'All rights reserved'})
    license: String
    
    @Column({ name : 'help_wanted', default : false})
    helpWanted: boolean
   
    @Column()
    desc: string

    @OneToMany(() => PostEntity, (post) => post.project)
    posts : PostEntity[]

    @ManyToMany(() => DevEntity, (dev) => dev.projects)
    @JoinTable()
    members : DevEntity[]

    @Column()
    owner : string

    @Column('jsonb', { default : [] })
    hearts : JSON

    @CreateDateColumn({ name : 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}
