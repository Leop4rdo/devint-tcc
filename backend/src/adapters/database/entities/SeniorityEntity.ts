import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import DevEntity from "./DevEntity";

@Entity('seniority')
export default class SeniorityEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({nullable:false})
  names: string

  @OneToMany(()=> DevEntity, (dev) => dev.autoDeclaredSeniority)
  devs: DevEntity[]
  
  @CreateDateColumn({ name : 'created_at', select: false })
  createdAt : Timestamp

  @UpdateDateColumn({ name : 'updated_at' })
  updatedAt : Timestamp
  
}