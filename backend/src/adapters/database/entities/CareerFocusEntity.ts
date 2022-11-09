import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import DevEntity from "./DevEntity"

@Entity('careers_focus')
export default class CareerFocusEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ nullable : false})
    name: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
    
}