import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import DevEntity from "./DevEntity"

@Entity('carrers_focus')
export default class CareerFocusEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ nullable : false})
    name: string
    
    @ManyToOne(()=> DevEntity, (dev) => dev.careerFocus)
    dev: DevEntity

    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
    
}