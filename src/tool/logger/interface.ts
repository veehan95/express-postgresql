export default interface ILogger {

  debug(message: string): void

  error(error: Error): void

  fatal(message: string): void

  info(message: string): void

  warn(message: string): void

}
