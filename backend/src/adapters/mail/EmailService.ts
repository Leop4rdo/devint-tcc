import { MetadataAlreadyExistsError } from "typeorm";
import IResponse from "../../../Responses/IResponse";
import IEmailService, { EmailData } from "../abstract/IEmailService";
import axios from "axios";
import fs from "fs";
import { error } from "console";

export default class EmailService implements IEmailService {
    async send(data: EmailData, template: string) {
        console.log('[INFO] sending email with template', template);
   
        const reqBody = {
            ...data,
            body : await this.getTemplate(template)
        }  

        try {
             const mailRes = await axios.post(`${process.env.MAIL_SERVICE_URL}/send`, reqBody)

            return mailRes.data as IResponse
        } catch (e) {
            console.error(e)
            return e.response.body
        }
    };

    private async getTemplate(src : string) {
        return new Promise((resolve,reject)=>{
            fs.readFile(src, 'utf-8', (err, data) =>
                (err) ? reject(err) : resolve(data)
            );
        })
    }
}

export const EmailTemplates = {
    PASSWORD_RECOVERY : 'res/email/password-recovery.html'
}