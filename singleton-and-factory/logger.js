class logger {
    constructor(){
        if(!logger.instance){
            logger.instance = this
        }
        this.logs = [];
        return logger.instance
    }

    log(message){
        const timestamp = new Date().toISOString();
        this.logs.push(`${timestamp} ${message}`)
        console.log(`${timestamp} ${message}`)
    }
}

export default logger