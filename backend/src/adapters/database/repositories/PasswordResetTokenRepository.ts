import PasswordResetTokenEntity from "../entities/PasswordResetTokenEntity";
import AbstractRepository from "./AbstractRepository";

export default class PasswordResetTokenRepository extends AbstractRepository<PasswordResetTokenEntity> {
    constructor() { super(PasswordResetTokenEntity)}
}