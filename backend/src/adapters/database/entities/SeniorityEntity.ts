import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import DevEntity from "./DevEntity";

@Entity('seniority')
export default class SeniorityEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({nullable:false})
  name: string

  @OneToMany(()=> DevEntity, (dev) => dev.autoDeclaredSeniority)
  devs: DevEntity[]
  
  @CreateDateColumn({ name : 'created_at' })
  createdAt : Timestamp

  @UpdateDateColumn({ name : 'updated_at' })
  updatedAt : Timestamp
  
}