import SocialLinkEntity from "../entities/SocialLinkEntity";
import AbstractRepository from "./AbstractRepository";

export default class SocialLinkRepository extends AbstractRepository<SocialLinkEntity> {
    constructor() { super(SocialLinkEntity) }
}