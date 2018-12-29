'use strict'
import { logger } from '../../tool/index'
import createFile from './src/create'
import helpList from './src/help'

switch (process.argv[2].toLowerCase()) {
  case 'g':
  case'generate':
    createFile(process.argv[3], process.argv[4]).then(message => logger.info(message))
    break
  case 'h':
  case 'help':
    logger.info(helpList)
    break
}
