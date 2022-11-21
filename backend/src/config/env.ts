import { resolve } from "path";
import { config } from "dotenv"

const getEnvPath = () => {
    if ((process.env.NODE_ENV || '').toLowerCase() == 'prod') 
        return '../../.env.prod'
    else
        return '../../.env'
}

config({ path: resolve(__dirname, getEnvPath())})
