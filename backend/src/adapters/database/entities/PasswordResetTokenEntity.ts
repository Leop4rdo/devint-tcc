import {Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn} from "typeorm";
import AuthEntity from "./AuthEntity";


@Entity("password_reset_token")
export default class PasswordResetTokenEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    @Index()
    token : string

    @Column({ type : "bigint",name : 'expiration_date' })
    expirationDate : number

    @ManyToOne(() => AuthEntity, { onDelete : 'CASCADE', eager : true })
    owner : AuthEntity

    @CreateDateColumn({ name : 'created_at' })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at',})
    updatedAt : Timestamp
}

