import {Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from "typeorm";
import AuthEntity from "./AuthEntity";


@Entity("password_reset_token")
export default class PasswordResetTokenEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    token : string

    @Column({ type : "bigint",name : 'expiration_date' })
    expirationDate : number

    @Column({ default : true })
    active : boolean

    @ManyToOne(() => AuthEntity, { onDelete : 'CASCADE' })
    owner : AuthEntity

    @CreateDateColumn({ name : 'created_at', select : false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at',})
    updatedAt : Timestamp
}

