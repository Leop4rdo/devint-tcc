import { MetadataAlreadyExistsError } from "typeorm";
import IResponse from "../../../Responses/IResponse";
import IEmailService, { EmailData } from "../abstract/IEmailService";
import axios from "axios";
import fs from "fs";
import { error } from "console";

export default class EmailService implements IEmailService {
    async send(data: EmailData, template: string) {
        const reqBody = {
            ...data,
            body : await this.getTemplate(template)
        }

        console.log(reqBody)

        return (await (axios.post(`${process.env.MAIL_SERVICE_URL}/send`, data))).data as IResponse;
    };

    private async getTemplate(src : string) {
        return await fs.readFile(src, (err, data) => {
            if (err) {
                console.log('error readig template :', err);
                return err;
            }
            console.log(data)
            return data
        });
    }
}

export const EmailTemplates = {
    PASSWORD_RECOVERY : '../../../resources/email/password-recovery.html'
}