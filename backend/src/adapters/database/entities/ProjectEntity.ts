import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import DevEntity from "./DevEntity"
import PostEntity from "./PostEntity"

@Entity('projects')
export default class ProjectEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column({ nullable : false})
    name: string
    
    @Column()
    desc: string

    @Column({ nullable : true, name : 'banner_uri' })
    bannerURI : string
    
    @Column('jsonb', { nullable : false, name : 'github_repository'})
    githubRepository: JSON

    @Column({ name : 'open_source', default : false})
    openSource: boolean

    @OneToMany(() => PostEntity, (post) => post.project, { onDelete : "SET NULL" })
    posts : PostEntity[]

    @ManyToMany(() => DevEntity, (dev) => dev.projects)
    @JoinTable()
    members : DevEntity[]

    @Column()
    owner : string

    @Column('jsonb', { default : [] })
    hearts : JSON

    @CreateDateColumn({ name : 'created_at' })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}
