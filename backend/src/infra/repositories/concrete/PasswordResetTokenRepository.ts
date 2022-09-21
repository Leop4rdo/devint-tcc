import PasswordResetTokenEntity from "../../../core/entities/PasswordResetTokenEntity";
import AbstractRepository from "../abstract/AbstractRepository";

export default class PasswordResetTokenRepository extends AbstractRepository<PasswordResetTokenEntity> {
    constructor() { super(PasswordResetTokenEntity)}
}