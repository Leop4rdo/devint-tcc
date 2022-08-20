import { hash, compare } from "bcrypt";
import { Entity } from "typeorm";
import errors from "../../../handler/errors.handler";
import IRepository from "../../../infra/repositories/abstract/IRepository";
import BadRequestResponse from "../../../Responses/BadRequestResponse";
import IResponse from "../../../Responses/IResponse";
import ServerErrorResponse from "../../../Responses/ServerErrorResponse";
import SuccessResponse from "../../../Responses/SuccessResponse";
import LoginDTO from "../../dtos/user/LoginDTO";
import UserCreateDTO from "../../dtos/user/UserCreateDTO";
import UserDTO from "../../dtos/user/UserDTO";
import UserResponseDTO from "../../dtos/user/UserResponseDTO";
import UserEntity from "../../entities/UserEntity";
import { IUserProps } from "../../interfaces/IUser";
import { AbstractService } from "../abstract/AbstractService";
import IUserService from "../abstract/IUserService";
import * as jwt from 'jsonwebtoken'

export default class UserService extends AbstractService<UserEntity> implements IUserService {
    constructor(_repo : IRepository<UserEntity>) {
        super(_repo);
    }

    override async list() : Promise<IResponse> { 
        try {

            const users = await this.repo.list()

            const res = users.map((user) => new UserResponseDTO( user as IUserProps ))

            return new SuccessResponse({
                data : res
            })

        } catch (e) {
            return new ServerErrorResponse({ 
                errorMessage: e.errorMessage
            })
        }
    }

    override async findById(id: string) : Promise<IResponse> {
        try {
            const user = await this.repo.findById(id)


            return new SuccessResponse({
                data: new UserResponseDTO(user as IUserProps)
            })

        } catch (e) {
            return new ServerErrorResponse({ 
                errorMessage: e.errorMessage
            })
        }
    }

    override async create(entity: UserCreateDTO) : Promise<IResponse> {
        try {
            if (await this.repo.findBy("email", entity.email)) {
                return new ServerErrorResponse({ 
                    errorMessage: errors.USER_EMAIL_ALREADY_IN_USE.message,
                    errorCode : errors.USER_EMAIL_ALREADY_IN_USE.message
                })
            }

            entity.password = await hash(entity.password, 10);

            const user = await this.repo.create(entity as UserEntity)

            return new SuccessResponse({
                status: 201,
                data: new UserResponseDTO(user as IUserProps)
            })

        } catch (e) {
            return new ServerErrorResponse({ 
                errorMessage: e.message
            })
        }
    }

    override async update(entity: UserDTO, id : string) : Promise<IResponse> {
        try {

            const entityExists = await this.repo.findById(id)

            if (!entityExists) {
                return new BadRequestResponse({
                    errorMessage: errors.ENTITY_NOT_FOUND.message,
                    errorCode: errors.ENTITY_NOT_FOUND.code
                })
            }

            for (const [key, value] of Object.entries(entity)) {
                entityExists[key] = value
            }

            await this.repo.update(entityExists)

            return new SuccessResponse({
                status: 204,
                data: new UserResponseDTO(entityExists as IUserProps)
            })

        } catch (e) {
            return new ServerErrorResponse({ 
                errorMessage: e.errorMessage
            })
        }
    } 

    async login(body : LoginDTO) : Promise<IResponse> {
        const user = await this.repo.findBy("email", body.email)

        const forbiddenResponseProps = {
            status : 403,
            errorCode : errors.LOGIN_FAILED.code,
            errorMessage : errors.LOGIN_FAILED.message
        }

        if (!user) 
            return new BadRequestResponse(forbiddenResponseProps)

        const isPasswordEquals = await compare(body.password, user.password)

        if (!isPasswordEquals)
            return new BadRequestResponse(forbiddenResponseProps)

        const userRes = new UserResponseDTO(user as IUserProps)

        const _token = this.createToken(userRes);

        return new SuccessResponse({
            data : {
                token : _token,
                user : userRes
            }
        })
    }

    async disable(id: string): Promise<IResponse> {
        try {

            const entityExists = await this.repo.findById(id)

            if (!entityExists) {
                return new BadRequestResponse({
                    errorMessage: errors.ENTITY_NOT_FOUND.message,
                    errorCode: errors.ENTITY_NOT_FOUND.code
                })
            }

            entityExists.enabled = false

            await this.repo.update(entityExists)

            return new SuccessResponse({
                status: 204,
                data: `Sucessfully disabled user with id ${id}`
            })
        } catch (e) {
            return new ServerErrorResponse({ 
                errorMessage: e.errorMessage
            })
        }
    }

    createToken(user : UserResponseDTO) {
        return jwt.sign({...user}, process.env.SECRET, { expiresIn : '1d' })
    }
}
