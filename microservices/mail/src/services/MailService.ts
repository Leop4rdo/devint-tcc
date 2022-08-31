import transporter from '../config/transporter'

export const send = async (data : any) => {
    const emailBody = (data.values != undefined || data.values != null) ? processTemplate(data.values, data.body) : data.body;

    if (!data.to || !data.subject || !emailBody ) return { erro : 'not enough data!'}

    await sendEmail(data.to, data.subject, emailBody);

    return { ...data, body : emailBody };
}

const sendEmail = async (_to : string, _subject : string , _body : string) => {
    const email = await transporter.sendMail({
        from: `${process.env.MAIL_SENDER_NAME} <${process.env.MAIL_USER}>`,
        to: _to,
        subject: _subject,
        html: _body
    })

    console.log(`email sent to ${_to}, id : ${email.messageId}, subject : ${_subject}`)
}

const processTemplate = (values : Object, template : String) => {
    const valueEntries = Object.entries(values)
    let proccessedTemplate = template;

    valueEntries.forEach(([key, value]) => {
        proccessedTemplate = proccessedTemplate.replace(key, value)
    })

    return proccessedTemplate;
}