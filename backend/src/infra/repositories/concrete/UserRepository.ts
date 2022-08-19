import UserEntity from "../../../core/entities/UserEntity";
import AbstractRepository from "../abstract/AbstractRepository";

export default class UserRepository extends AbstractRepository<UserEntity> {
    constructor() { super(UserEntity) }
}