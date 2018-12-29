import * as pino from 'pino'
import ILogger from './interface'

export default class Pino implements ILogger {

  private logger = pino({ prettyPrint: true })

  debug(message: string): void {
    this.logger.debug(message)
  }

  error(error: Error): void {
    this.logger.error(error)
  }

  fatal(message: string): void {
    this.logger.fatal(message)
  }

  info(message: string): void {
    this.logger.info(message)
  }

  warn(message: string): void {
    this.logger.warn(message)
  }

}
