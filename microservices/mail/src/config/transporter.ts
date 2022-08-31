import "./env";

import { createTransport } from "nodemailer";



const transporter = createTransport({
    auth: {
        user : process.env.MAIL_USER,
        pass : process.env.MAIL_PASSWORD
    },
    host: "smtp-mail.outlook.com",
    secure: false,
    port : 587,
    tls : {
        ciphers : 'SSLv3'
    }
} ) 

export default transporter