import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import ArticleEntity from "./ArticleEntity";
import AuthEntity from "./AuthEntity";
import BadgeEntity from "./BadgeEntity";
import CareerFocusEntity from "./CareerFocusEntity";
import PostEntity from "./PostEntity";
import ProjectEntity from "./ProjectEntity";
import SeniorityEntity from "./SeniorityEntity";
import SkillEntity from "./SkillEntity";
import SocialLinkEntity from "./SocialLinkEntity";

@Entity('devs')
export default class DevEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({nullable:false})
    name : string

    @Column({ default: '', nullable : true })
    bio : string

    @Column()
    gender : string

    @Column({default: ''})
    status: string 

    @Column({name : 'profile_pic_url', nullable : true })
    profilePicUrl : string
    
    @Column({default : 0 , name:'comunity_ratings'})
    comunityRating : number

    @Column('jsonb', { nullable : true })
    notifications : JSON
    
    @Column({default : '', name : 'current_job'})
    currentJob : string

    @Column({nullable : true, name : 'github_username', unique : true})
    githubUsername : string

    @Column({name : 'open_to_work', default: false})
    openToWork : boolean

    @Column({type : 'date' })
    birthday : Date

    @ManyToMany(()=> DevEntity, (devs) => devs.following)
    @JoinTable({name:'follows'})
    following: DevEntity[]

    @OneToOne(() => AuthEntity, { nullable : false, onDelete : 'CASCADE'})
    @JoinColumn()
    auth : AuthEntity

    @OneToMany(()=> PostEntity, (posts) => posts.writter)
    posts: ProjectEntity[]

    @OneToMany(()=> ArticleEntity, (articles) => articles.writter)
    articles: ArticleEntity[]

    @OneToMany(()=> SocialLinkEntity ,(social) => social.value)
    @JoinColumn({name: 'social_links'})   
    socialLinks : SocialLinkEntity[]

    @ManyToOne(()=> CareerFocusEntity ,(careerFocus) => careerFocus.dev)
    @JoinColumn({name: 'careers_focus'})   
    careerFocus : CareerFocusEntity[]
    
    @OneToMany(()=> SeniorityEntity, (senior) => senior.devs)
    @JoinColumn({name: 'auto_declared_seniority'})
    autoDeclaredSeniority : SeniorityEntity

    @ManyToMany(()=> SkillEntity)
    @JoinTable({name: 'devs_skills'})
    skills: SkillEntity[]

    @ManyToMany(()=> ProjectEntity)
    @JoinTable({name: 'devs_projects'})
    projects: ProjectEntity[]

    @ManyToMany(()=> BadgeEntity)
    @JoinTable({name: 'devs_badges'})
    badges: BadgeEntity[]   

    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}