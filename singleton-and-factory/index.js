import FactoryLogger from "./loggerFactory.js";
import logger from "./logger.js";

const loggerInstance = new logger()

const loggerConsole = FactoryLogger.createLogger('console')
const loggerFile = FactoryLogger.createLogger('file')

loggerConsole.log("este es un mesaje por loggerconsole")
loggerFile.log("este es un mensaje por loggerfile")
loggerFile.log("este es un segundo mensaje por loggerfile")

loggerInstance.logs.forEach(element => {
    console.log(element)
});
