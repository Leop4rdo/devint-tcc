import { MetadataAlreadyExistsError } from "typeorm";
import IResponse from "../../../Responses/IResponse";
import IEmailService, { EmailData } from "../abstract/IEmailService";
import axios from "axios";

export default class EmailService implements IEmailService {
    async send(data: EmailData, template: string) {
        const reqBody = {
            ...data,
            body : this.getTemplate(template)
        }

        return (await (axios.post(`${process.env.MAIL_SERVICE_URL}/send`, data))).data as IResponse;
    };

    private getTemplate(src : string) {
        
    }
}