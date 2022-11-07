import Seniority from "@src/core/domain/Seniority";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import ArticleEntity from "./ArticleEntity";
import AuthEntity from "./AuthEntity";
import BadgeEntity from "./BadgeEntity";
import CareerFocusEntity from "./CareerFocusEntity";
import PostEntity from "./PostEntity";
import ProjectEntity from "./ProjectEntity";
import SeniorityEntity from "./SeniorityEntity";
import SkillEntity from "./SkillEntity";
import SocialLinkEntity from "./SocialLinkEntity";

const DEFAULT_BANNER = 'https://firebasestorage.googleapis.com/v0/b/devint-tcc-33eb6.appspot.com/o/banner%2Fdefault_banner.png?alt=media&token=e49423e0-f090-400f-b055-c2f36ab4c7fd'
const DEFAULT_PROFILE_PIC = 'https://firebasestorage.googleapis.com/v0/b/devint-tcc-33eb6.appspot.com/o/profile%2Fdefault_profile_pic(1).png?alt=media&token=c56f4d96-a281-481a-a398-3bf4306ede97'

@Entity('devs')
export default class DevEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    @Index()
    name: string

    @ManyToMany(() => DevEntity, (dev) => dev.followers, {cascade: true})
    @JoinTable({ name : 'follow', joinColumn : { name : 'source_dev' }, inverseJoinColumn : { name : 'target_dev'} })
    following : DevEntity[]

    @ManyToMany(() => DevEntity, (dev) => dev.following)
    followers : DevEntity[]

    @Column({ default: '', nullable: true })
    bio: string

    @Column()
    gender: string

    @Column({ name: 'profile_pic_url', default : DEFAULT_PROFILE_PIC })
    profilePicUrl: string

    @Column({ name: 'banner_uri', default : DEFAULT_BANNER})
    bannerURI : string

    @Column({ default: 0, name: 'comunity_ratings' })
    comunityRating: number

    @Column('jsonb', { nullable: true })
    notifications: JSON

    @Column({ default: '', name: 'current_job' })
    currentJob: string

    @Column({ nullable: true, name: 'github_username', unique: true })
    @Index({ unique: true })
    githubUsername: string

    @Column({ name: 'open_to_work', default: false })
    @Index()
    openToWork: boolean

    @Column({ type: 'date' })
    birthday: Date

    @OneToOne(() => AuthEntity, { nullable: false, onDelete: 'CASCADE', eager: true })
    @JoinColumn()
    auth: AuthEntity

    @OneToMany(() => PostEntity, (posts) => posts.writter)
    posts: PostEntity[]

    @OneToMany(() => ArticleEntity, (articles) => articles.writter)
    articles: ArticleEntity[]

    @OneToMany(() => SocialLinkEntity, (social) => social.owner, {cascade: true})
    @JoinColumn({ name: 'social_links' })
    socialLinks: SocialLinkEntity[]

    @ManyToOne(() => CareerFocusEntity)
    @JoinColumn({ name: 'careers_focus' })
    @Index()
    careerFocus: CareerFocusEntity

    @ManyToOne(() => SeniorityEntity, (seniority) => seniority.devs)
    @JoinColumn({ name: 'auto_declared_seniority' })
    autoDeclaredSeniority: SeniorityEntity

    @ManyToMany(() => SkillEntity)
    @JoinTable({ name: 'devs_skills' })
    skills: SkillEntity[]

    @ManyToMany(() => ProjectEntity)
    projects: ProjectEntity[]

    @ManyToMany(() => BadgeEntity)
    @JoinTable({ name: 'devs_badges' })
    badges: BadgeEntity[]

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Timestamp

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Timestamp
}
