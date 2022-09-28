import internal from "stream";
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('auth')
export default class AuthEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Index({ unique: true })
    @Column({ unique : true })
    email : string

    @Column()
    password : string

    @Column({default : 0})
    role : number

    @Column({ default: true })
    enabled : boolean

    @CreateDateColumn({ 
        name: 'created_at', 
        select : false 
    })
    createdAt : Timestamp

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt : Timestamp
}

