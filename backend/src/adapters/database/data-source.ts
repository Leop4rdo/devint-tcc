import "reflect-metadata"
import { DataSource } from "typeorm";
import ArticleEntity from "@entities/ArticleEntity";
import AuthEntity from "@entities/AuthEntity";
import BadgeEntity from "@entities/BadgeEntity";
import CareerFocusEntity from "@entities/CareerFocusEntity";
import CompanyEntity from "@entities/CompanyEntity";
import DevEntity from "@entities/DevEntity";
import PasswordResetTokenEntity from "@entities/PasswordResetTokenEntity";
import PostAttachmentEntity from "@entities/PostAttachmentEntity";
import PostEntity from "@entities/PostEntity";
import ProjectEntity from "@entities/ProjectEntity";
import SeniorityEntity from "@entities/SeniorityEntity";
import SkillEntity from "@entities/SkillEntity";
import SocialLinkEntity from "@entities/SocialLinkEntity";



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
        ProjectEntity, SocialLinkEntity, SeniorityEntity, PostAttachmentEntity,
        PasswordResetTokenEntity],
})