import "./config/env"

import { AppDataSource } from "./data-source"
import express from "express"
import cors from "cors"
import helmet from "helmet"
import routes from "./routes";
import errorHandlerMiddleware from "./middlewares/error-handler.middleware"
import notFoundMiddleware from "./middlewares/not-found.middleware"

const PORT = process.env.SE_PORT || 8080;

AppDataSource.initialize().then(async () => {
    const app = express(); // creating express app
    
    // loading global middlewares
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(errorHandlerMiddleware)
    
    // loaging routes
    app.use('/api/v1', routes);
    
    app.use(errorHandlerMiddleware)
    app.use('*', notFoundMiddleware)
    
    app.listen(PORT, () => {
        console.log(`Api is currently running on port ${PORT}`)
    })
    
}).catch(error => console.warn(error))
