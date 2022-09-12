import "reflect-metadata"
import { DataSource } from "typeorm";
import ArticleEntity from "./core/entities/ArticleEntity";
import AuthEntity from "./core/entities/AuthEntity";
import BadgeEntity from "./core/entities/BadgeEntity";
import CareerFocusEntity from "./core/entities/CareerFocusEntity";
import CompanyEntity from "./core/entities/CompanyEntity";
import DevEntity from "./core/entities/DevEntity";
import PostAttachmentEntity from "./core/entities/PostAttachmentEntity";
import PostEntity from "./core/entities/PostEntity";
import ProjectEntity from "./core/entities/ProjectEntity";
import SeniorityEntity from "./core/entities/SeniorityEntity";
import SkillEntity from "./core/entities/SkillEntity";
import SocialLinkEntity from "./core/entities/SocialLinkEntity";


export const AppDataSource = new DataSource({
    synchronize : true,
    type: "postgres",
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432, 
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'db',
    logging: ['error', 'warn'],
    entities: [AuthEntity, DevEntity, CompanyEntity, SkillEntity, 
        ArticleEntity, BadgeEntity, CareerFocusEntity, PostEntity, 
        ProjectEntity, SocialLinkEntity, SeniorityEntity, PostAttachmentEntity],
})