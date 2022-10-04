import "./config/env"

import express from "express"
import cors from "cors"
import mailController from "./controllers/MailController";

const PORT = process.env.PORT || 8089

const app = express();

app.use(express.json());
app.use(cors())

app.use(mailController);

app.listen(PORT, () => {
    console.log('Mail microservice listening on port ' + PORT);
})