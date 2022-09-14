import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { genders } from "../interfaces/IDev";
import AuthEntity from "./AuthEntity";

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
    
    @Column('jsonb', { nullable : true, default: [] })
    following : JSON

    @Column('jsonb', { nullable : true, default: [] })
    followers : JSON

    @Column({name : 'profile_pic_url', nullable : true, default : ''})
    profilePicUrl : string
    
    @Column('jsonb', {name: 'social_links', default : []})
    socialLinks : JSON
    
    @Column({default : 0 , name:'comunity_ratings'})
    comunityRating : number

    @Column('jsonb', { default: [] })
    notifications : JSON

    

    @Column({default : '', name : 'current_job'})
    currentJob : string

    @Column({nullable : false, name : 'github_username', unique : true})
    githubUsername : string

    @Column({name : 'open_to_work', default: false})
    openToWork : boolean

    @Column({ type : 'date' })
    birthday : Date

    @OneToOne(() => AuthEntity, { nullable : false })
    @JoinColumn()
    auth : AuthEntity

    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}