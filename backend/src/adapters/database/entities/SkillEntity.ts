import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"

@Entity('skills')
export default class SkillEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ nullable : false})
    name: string

    @Column()
    icon: string
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
}