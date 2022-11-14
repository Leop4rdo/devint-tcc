import "module-alias/register"
import "./config/env"

import { AppDataSource } from "@adapters/database/data-source"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import routes from "@src/application/routes";
import logMiddleware from "@src/application/middlewares/log.middleware"

import * as CareerFocusWorker from "./workers/CareerFocusWorker"

const PORT = process.env.SE_PORT || 8080;

AppDataSource.initialize().then(async () => {
    await CareerFocusWorker.setup()

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
        console.log(`[INFO] <DevInt_ Api is currently running on http://localhost:${PORT}/api/v1`)
    })
    
}).catch(error => console.warn(error))
