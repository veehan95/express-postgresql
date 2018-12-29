'use strict'
import * as fs from 'fs'

const createFile = (createObj: string, fileName: string): Promise<string> => {
  const commands = '/**\r\n * Start code here.\r\n *\/'
  const pgconnect = "const connAsPool = require('../../connection').connAsPool\r\n"
  const space = '\r\n'
  const startscript = "'use strict'\r\n\r\n"
  let content: string
  let filename: string

  if (typeof fileName != 'string' || fileName.length <= 0) {
    return new Promise(resolve => resolve('Undefined intent of file creation.'))
  }

  switch (createObj) {
    case 'database':
      content = "const create = require('./src/create').createDatabase\r\n"
      filename = `${Math.floor(Date.now() / 1000)}_database_${fileName}.js`
      break
    case 'table':
      content = "const create = require('./src/create').createTable\r\n"
      filename = `${Math.floor(Date.now() / 1000)}_table_${fileName}.js`
      break
    default:
      return new Promise(resolve => resolve('Invalid action'))
      break
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(
      `./src/database/migrates/${filename}`,
      `${startscript}${content}${pgconnect}${space}${commands}`,
      'utf-8',
      err => { err ? reject(err) : resolve(`${filename} created`) },
    )
  })
}

export default createFile
