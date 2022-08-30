import CompanyEntity from "../../../core/entities/CompanyEntity";
import AbstractRepository from "../abstract/AbstractRepository";

export default class CompanyRepository extends AbstractRepository<CompanyEntity> {
    constructor() { super(CompanyEntity); }
}