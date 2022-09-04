import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"

@Entity('carrers_focus')
export default class CareerFocusEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ nullable : false})
    name: string
    
    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}