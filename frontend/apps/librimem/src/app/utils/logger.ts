import * as winston from "winston";
import { environment } from '../../environments/environment';

export const LOG = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: "error" }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

// NOTE If we are not in production then we log to the console
if (environment.production) {
  LOG.add((new winston.transports.Console({
    format: winston.format.simple()
  })))
}
