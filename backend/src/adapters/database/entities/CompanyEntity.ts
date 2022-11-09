import { Entity, PrimaryGeneratedColumn, Column, OneToOne, CreateDateColumn, Timestamp, UpdateDateColumn, JoinColumn, Index } from "typeorm"
import AuthEntity from "./AuthEntity"

@Entity('companies')
export default class CompanyEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    @Index()
    name : string

    @Column({unique: true})
    @Index({unique: true})
    cnpj : string

    @OneToOne(() => AuthEntity, { nullable : false})
    @JoinColumn()
    auth : AuthEntity

    @CreateDateColumn({ name: 'created_at' })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}