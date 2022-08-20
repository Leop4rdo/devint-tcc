import "reflect-metadata"
import { DataSource } from "typeorm";
import UserEntity from "./core/entities/UserEntity";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 3306, 
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'db',
    synchronize: true,
    logging: ['error', 'warn'],
    entities: [UserEntity],
})