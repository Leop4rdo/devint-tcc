import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, Timestamp, UpdateDateColumn, JoinColumn } from "typeorm"
import AuthEntity from "./AuthEntity"

@Entity('companies')
export default class CompanyEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name : string

    @Column()
    cnpj : string

    @Column({ nullable : true })
    bio : string

    @Column('jsonb', { nullable : true })
    following : JSON

    @Column('jsonb', { nullable : true })
    followers : JSON

    @OneToOne(() => AuthEntity, { nullable : false})
    @JoinColumn()
    auth : AuthEntity

    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}