'use strict'
import * as fs from 'fs'

export default class CreateFile {

  private imports: any = {
    altertable: 'AlterTable',
    alterdatabase: 'AlterDatabase',
    createdatabase: 'CreateDatabase',
    createtable: 'CreateTable',
  }

  private importDir: string = '@util-migrate/'

  public createFile(args: string[]): Promise<string> {
    const intent = 'alterTable'
    if (intent) {
      const [arg0, fileName, ...rest] = args

      if (typeof fileName != 'string' || fileName.length <= 0) {
        return new Promise(resolve => resolve('Undefined intent of file creation.'))
      } else {
        return this.createScript(intent, fileName, rest)
      }
      return new Promise(resolve => resolve('Undefined intent of file creation.'))
    } else {
      return new Promise(resolve => resolve('Invalid action'))
    }
 }

  private createScript(intent: string, fileName: string, args: string[]): Promise<string> {
    let filename: string
    const className = fileName.charAt(0).toUpperCase() + fileName.slice(1)

    switch (true) {
      case /^(alter|create)database$/i.test(intent):
        filename = `${Math.floor(Date.now() / 1000)}_database_${className}.ts`
        break
      case /^(alter|create)table$/i.test(intent):
        filename = `${Math.floor(Date.now() / 1000)}_table_${className}.ts`
        break
      default:
        return new Promise(resolve => resolve('Invalid action'))
        break
    }

    const script = "'use strict'\r\n"
      + `import { ${this.imports[intent.toLowerCase()]} } from '@tool/index'\r\n`
      + '\r\n'
      + '/**\r\n'
      + ` * @class ${className}\r\n`
      + ' * @description <Please write on your own>\r\n'
      + ' */\r\n'
      + `export default class ${className} {\r\n\r\n`
      + ' /**\r\n'
      + '  * @function main\r\n'
      + '  * @param {Client} client - pg connection as client\r\n'
      + '  * @param {pg} client - pg connection\r\n'
      + '  * @return {boolean|string} true is success, error message if fail\r\n'
      + '  * @describe the only function where the script will run\r\n'
      + '  */\r\n'
      + ' public main(client: any, pg: any): void {\r\n'
      + '   // Start coding here\r\n'
      + ' }\r\n\r\n}'

    return new Promise((resolve, reject) => {fs.writeFile(
        `./src/database/migrates/${filename}`,
        script,
        'utf-8',
        err => { err ? reject(err) : resolve(`${filename} created`) },
      )
    })
  }

}
