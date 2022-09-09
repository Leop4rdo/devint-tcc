import internal from "stream";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { userRoles } from "../interfaces/IUser";

@Entity('auth')
export default class AuthEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    email : string

    @Column()
    password : string

    @Column({ 
        type: 'enum',
        enum: userRoles,
        default : userRoles.DEV
    })
    role : number

    @Column({ default: 1 })
    enabled : number

    @CreateDateColumn({ 
        name: 'created_at', 
        select : false 
    })
    createdAt : Timestamp

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt : Timestamp
}

