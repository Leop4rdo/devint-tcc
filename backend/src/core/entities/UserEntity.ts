import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity('users')
export default class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    name : string

    @Column()
    email : string

    @Column()
    password : string

    @Column({ default : 0 })
    role : number

    @Column({ default : true })
    enabled : boolean

    @CreateDateColumn({ select : false })
    createdAt : Timestamp

    @CreateDateColumn()
    updatedAt : Timestamp
}
