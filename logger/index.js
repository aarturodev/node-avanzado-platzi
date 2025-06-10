import pino from "pino"

const isProduction = process.env.NODE_ENV === "production";

const developmentConfig = {
  level : "debug",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname",
      levelFirst: true,
    }
  }
}

const productionConfig = {
  level: "info",
  transport: {
    target: "pino/file",
    options: {
      destination: "./logs/app.log",
      translateTime: "SYS:standard",
      mkdir: true,
      append: true,
    }
  }
}

const logger = pino(isProduction ? productionConfig : developmentConfig);

function operacion (){
  setInterval(() => {
    logger.debug({
      message: "Mensaje de depuración",
      timestamp: new Date().toISOString()
    });
  }, 1000);
}

process.on('uncaughtException', (err)=>{
  logger.error("error no capturado: ", err)
})
process.on('unhandledRejection', (reason)=>{
  logger.error("Rechazo no capturado: ", reason)
})

const signals = ["SIGINT", "SIGTERM", "SIGQUIT", "SIGHUP"];

signals.forEach(signal => { 
  process.on(signal, (signal) => {
    logger.info(`Se recibió la señal: ${signal}`);
    process.exit(1);
  }
)});

operacion();