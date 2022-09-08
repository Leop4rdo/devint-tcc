import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { genders } from "../interfaces/IDev";
import ArticleEntity from "./ArticleEntity";
import AuthEntity from "./AuthEntity";
import BadgeEntity from "./BadgeEntity";
import CareerFocusEntity from "./CareerFocusEntity";
import PostEntity from "./PostEntity";
import ProjectEntity from "./ProjectEntity";
import SeniorityEntity from "./SeniorityEntity";
import SkillEntity from "./SkillEntity";

@Entity('devs')
export default class DevEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable:false})
    name : string

    @Column({ default: '', nullable : true })
    bio : string

    @Column({ type : 'enum', enum: genders, default: genders.OTHER })
    gender : string

    @Column({default: ''})
    status: string
    
    @Column('jsonb', { nullable : true })
    following : JSON

    @Column('jsonb', { nullable : true })
    followers : JSON

    @Column({name : 'profile_pic_url'})
    profilePicUrl : string
    
    @Column('jsonb', {name: 'social_links'})
    socialLinks : JSON
    
    @Column({default : 0 , name:'comunity_ratings'})
    comunityRating : number

    @Column('jsonb')
    notifications : JSON

    @Column({default : '', name : 'current_job'})
    currentJob : string

    @Column({nullable : false, name : 'github_username', unique : true})
    githubUsername : string

    @Column({name : 'open_to_work'})
    openToWork : boolean

    @Column({ type : 'date' })
    birthday : Date

    @OneToOne(() => AuthEntity, { nullable : false })
    @JoinColumn()
    auth : AuthEntity

    @ManyToMany(()=> SkillEntity)
    @JoinTable()
    skills: SkillEntity[]

    @ManyToMany(()=> BadgeEntity)
    @JoinTable()
    badges: BadgeEntity[]

    @OneToMany(()=> PostEntity, (posts) => posts.writter)
    posts: ProjectEntity[]

    @OneToMany(()=> ArticleEntity, (articles) => articles.writter)
    articles: ArticleEntity[]

    @OneToMany(()=> CareerFocusEntity ,(carrerFocus) => carrerFocus.dev)
    @JoinColumn({name: 'carrers_focus'})   
    careerFocus : CareerFocusEntity[]

    // @ManyToOne(()=> SeniorityEntity, (senior) => senior.SSeniority)
    // @JoinColumn({name:'auto_declared_seniority'})
    // autoDeclaredSeniority : SeniorityEntity[]

    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}