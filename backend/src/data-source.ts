import "reflect-metadata"
import { DataSource } from "typeorm";
import AuthEntity from "./core/entities/AuthEntity";
import CompanyEntity from "./core/entities/CompanyEntity";
import DevEntity from "./core/entities/DevEntity";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432, 
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'db',
    synchronize: true,
    logging: ['error', 'warn'],
    entities: [AuthEntity, DevEntity, CompanyEntity],
})