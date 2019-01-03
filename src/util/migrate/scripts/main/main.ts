'use strict'
import 'module-alias/register'
import { logger } from '@tool/index'
import CreateFile from '@util-migrate-scripts/create/create'
import * as helpJson from './help.json'

/**
 * @class Main
 * @describe redirect to all valiable command's functions
 */
export default class Main {

  /**
   * @function main
   * @param {string[]} argv process.argv | input arguments
   * @describe main function of the class
   */
  public main(argv: string[]) {
    const args = argv.slice(2)

    switch (true) {
      case /^(g|generate):[a-zA-Z0-9_-]*$/i.test(args[0]):
        const cf = new CreateFile()
        cf.createFile(args.slice(1))
          .then((message: string) => logger.info(message))
        break
      case /^(h|help)$/i.test(args[0]):
        logger.info(helpJson.help)
        break
      default:
        logger.warn('Invalid command')
        break
    }
  }

}
