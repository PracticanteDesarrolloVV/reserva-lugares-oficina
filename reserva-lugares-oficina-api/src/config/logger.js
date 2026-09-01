const winston = require('winston');

// Salida a archivo solo fuera de desarrollo (calidad/producción)
const transports = [new winston.transports.Console()];

if (process.env.NODE_ENV !== 'development') {
  transports.push(new winston.transports.File({ filename: 'logs/error.log', level: 'error' }));
  transports.push(new winston.transports.File({ filename: 'logs/combined.log' }));
}

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  transports,
});

module.exports = logger;
