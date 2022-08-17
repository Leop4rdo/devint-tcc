import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 3307, 
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'notly_db',
    synchronize: true,
    logging: ['error', 'warn'],
    entities: [],
})