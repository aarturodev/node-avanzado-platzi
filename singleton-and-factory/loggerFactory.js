import fs from "node:fs"
import path from "node:path";
import url from "node:url"
import logger from "./logger.js";


const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const loggerInstance = new logger()


class ConsoleLogger {
    constructor(){
        this.logger = loggerInstance
    }

    log(message){
        console.log("usando el consolelogger")
        this.logger.log(message)
    }
}

class FileLogger {
    constructor(){
        this.logger = loggerInstance
        this.filePath = path.join(__dirname, 'logs.txt')
    }

    log(message){
        console.log("usando el file logger")
        const timestamp = new Date().toISOString();
        const msg = `${timestamp}: ${message}`

        fs.appendFileSync(this.filePath, `${msg}\n`)
        
        this.logger.log(message)
    }
}

class FactoryLogger{
    static createLogger(type){
        if(type === 'console'){
            return new ConsoleLogger()
        }
        else if(type === 'file'){
            return new FileLogger()
        }
        else{
            throw new Error("tipo de logger no valido")
        }
    }

}

export default FactoryLogger