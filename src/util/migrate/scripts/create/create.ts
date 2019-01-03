'use strict'
import * as fs from 'fs'

export default class CreateFile {

  private imports: any = {
    alterTable: ['AlterTable', 'alterTable'],
    alterdatabase: ['AlterDatabase', 'alterDatabase'],
    createTable: ['CreateTable', 'createTable'],
  }

  private importDir: string = '@util-migrate/'

  public createFile(args: string[]): Promise < string > {/*
    const startscript = "'use strict'\r\n"

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
    })*/
    return new Promise((resolve, reject) => {
      resolve('$filename} created')
    })
  }

  private async commandQuery(arg: string) {
    arg.match('--(\S*)')
    arg.match('(^|\s)-[^-](\S*)')
    return arg
  }
}
