import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('seniority')
export default class SeniorityEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: string
}