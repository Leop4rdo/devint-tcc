import IResponse from "../../../Responses/IResponse"

export type EmailData = {
    to : string,
    values ?: object
    subject : string
    body ?: string
}

export default interface IEmailService {
    send : (data : EmailData, template : string) => Promise<IResponse>
}