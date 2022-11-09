import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"
import DevEntity from "./DevEntity"

@Entity('social_links')
export default class SocialLinkEntity {
    
    @PrimaryGeneratedColumn('uuid')
    id: string
    
    @Column({ nullable : false})
    name: string

    @Column({ nullable : false})
    url: string

    @ManyToOne(()=> DevEntity, (dev) => dev.socialLinks)
    owner : DevEntity
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt : Timestamp

    @UpdateDateColumn({ name : 'updated_at' })
    updatedAt : Timestamp
    
}