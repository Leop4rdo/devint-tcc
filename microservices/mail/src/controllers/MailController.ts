import { request, Request, Response, Router } from "express";
import * as emailService from "../services/MailService";

const mailController = Router();

mailController.post('/send', (req : Request, res : Response) => {
    emailService.send(req.body).then((data) => {
        res.status(200).json({
            message: 'email sent successfully!',
            ...data
        })
    }).catch((err) => 
        res.status(400).json({message: err.message})
    );
})

export default mailController;