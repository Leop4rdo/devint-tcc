import fs from "fs";
import transporter from "./Transporter";

export type EmailData = {
    to : string,
    values ?: object
    subject : string
    body ?: string
}
export default class EmailService {
    async send(data: EmailData, template: string) {
        console.log('[INFO] sending email with template', template);
        
        try {
            data.body = this.processTemplate(data.values, await this.getTemplate(template) as string)

            this.sendEmail(data.to, data.subject, data.body)
        } catch (e) {
            console.error(e)
        }
    };

    private processTemplate = (values : Object, template : string) => {
        const valueEntries = Object.entries(values)
        let proccessedTemplate = template;
    
        valueEntries.forEach(([key, value]) => {
            proccessedTemplate = proccessedTemplate.replace('${'+key+'}', value)
        })
    
        return proccessedTemplate;
    }

    private sendEmail = async (_to : string, _subject : string , _body : string) => {
        const email = await transporter.sendMail({
            from: `${process.env.MAIL_SENDER_NAME} <${process.env.MAIL_USER}>`,
            to: _to,
            subject: _subject,
            html: _body
        })
    
        console.log(`email sent to ${_to}, id : ${email.messageId}, subject : ${_subject}`)
    }

    private async getTemplate(src : string) {
        return new Promise((resolve,reject)=>{
            fs.readFile(src, 'utf-8', (err, data) =>
                (err) ? reject(err) : resolve(data)
            );
        })
    }
}

export const EmailTemplates = {
    PASSWORD_RECOVERY : 'res/email/password-recovery.html',
    EMAIL_CONFIRM : 'res/email/email-confirm.html'
}