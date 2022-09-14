import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import DevEntity from "./DevEntity"

@Entity('social_links')
export default class SocialLinkEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ nullable : false})
    name: string
    
    // @Column({ nullable : false})
    // value: string

    @ManyToOne(()=> DevEntity, (dev) => dev.socialLinks)
    value : DevEntity
    
    @CreateDateColumn({ name: 'created_at', select: false })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
    
}