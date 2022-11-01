import internal from "stream";
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('auth')
export default class AuthEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Index({ unique: true })
    @Column({ unique : true, nullable: false })
    email : string

    @Column({name: 'email_confirmed', default:false})
    emailConfirmed : boolean

    @Column({ nullable : false})
    password : string

    @Column({default : 0})
    role : number

    @Column({ default: true })
    enabled : boolean

    @CreateDateColumn({ name: 'created_at'})
    createdAt : Timestamp

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt : Timestamp
}

