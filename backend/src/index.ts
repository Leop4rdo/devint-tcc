import "./config/env"

import { AppDataSource } from "./adapters/database/data-source"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import routes from "./application/routes";
import logMiddleware from "./application/middlewares/log.middleware"

const PORT = process.env.SE_PORT || 8080;

AppDataSource.initialize().then(async () => {
    const app = express(); // creating express app
    
    // loading global middlewares
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    
    if (process.env.LOG_REQUESTS)
        app.use(logMiddleware)

    // loaging routes
    app.use('/api/v1', routes);
    
    app.listen(PORT, () => {
        console.log(`Api is currently running on port ${PORT}`)
    })
    
}).catch(error => console.warn(error))
