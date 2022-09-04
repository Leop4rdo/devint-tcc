import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { autoDeclaredSeniority, genders, openToWork } from "../interfaces/IDev";
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
    
    @Column('jsonb', { nullable : true })
    following : JSON

    @Column('jsonb', { nullable : true })
    followers : JSON

    @Column()
    profilePickUrl : string
    
    @Column('jsonb')
    socialLinks : JSON
    
    @Column({default : 0 })
    comunityRating : number

    @Column('jsonb')
    notifications : JSON

    @Column({ type : 'enum', enum: autoDeclaredSeniority, default: autoDeclaredSeniority.NO})
    autoDeclaredSeniority : boolean

    @Column({default : ''})
    currentJob : string

    @Column({nullable : false})
    githubUsername : string

    @Column({ type : 'enum', enum: openToWork, default: openToWork.NO})
    openToWork : boolean

    @Column({ type : 'date', nullable : true })
    birthday : Date

    @OneToOne(() => AuthEntity, { nullable : false })
    @JoinColumn()
    auth : AuthEntity

    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}