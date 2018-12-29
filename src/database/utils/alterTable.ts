'use strict'
import { logger } from '../../tool/index'

export default class AlterTable {

  /**
   * @function constructor
   * @param {Client} client connection to postgresql
   * @param {string} tableName
   */
  constructor(protected client: any, protected tableName: string) {}

  /**
   * @function connect
   * @return connection message | error message
   */
  public async connect() {
    return await this.client.query(`SELECT '${this.tableName}'::regclass;`)
      .then((res: string) => this.posReturn(res, `connected to table ${this.tableName}`))
      .catch((e: Error) => { throw Error(`Table ${this.tableName} Not Found`) })
  }

  /**
   * @function addColumn
   * @param {string} columnName
   * @param {string} type
   * @return {string|Error} create message | error message
   */
  public async addColumn(columnName: string, type: string): Promise<string|Error> {
    return await this.client.query(`ALTER TABLE ${this.tableName} ADD COLUMN ${columnName} ${type};`)
      .then((res: string) => this.posReturn(res, `Column ${columnName} created in table ${this.tableName}`))
      .catch((e: Error) => { throw e })
  }

  /**
   * @function dropColumn
   * @param {string} columnName
   * @return {string|Error} create message | error message
   */
  public async dropColumn(columnName: string): Promise<string|Error> {
    return await this.client.query(`ALTER TABLE ${this.tableName} DROP COLUMN ${columnName};`)
      .then((res: string) => this.posReturn(res, `Column ${columnName} removed from table ${this.tableName}`))
      .catch((e: Error) => { throw e })
  }

  /**
   * @function renameColumn
   * @param {string} oldColumnName
   * @param {string} newColumnName
   * @return {string|Error} create message | error message
   */
  public async renameColumn(oldColumnName: string, newColumnName: string): Promise<string|Error> {
    await this.client.query(`ALTER TABLE ${this.tableName} RENAME COLUMN ${oldColumnName} TO ${newColumnName};`)
      .then((res: string) => this.posReturn(res, `Column ${oldColumnName} in table ${this.tableName} renamed`
        + ` to ${newColumnName}`))
      .catch((e: Error) => { throw e })
  }

  /**
   * @function alterColumnDefault
   * @param {string} columnName
   * @param {string} value - optional
   * @return {string|Error} create message | error message
   */
  public async alterColumnDefault(columnName: string, value?: string): Promise<string|Error> {
    await this.client.query(`ALTER TABLE ${this.tableName} ALTER COLUMN ${columnName} `
      + value != null ? `SET DEFAULT ${value};` : 'DROP DEFAULT;')
      .then((res: string) => this.posReturn(res, `Column ${columnName} in table ${this.tableName}, default value `
        + value != null ? `set to ${value}` : 'droped'))
      .catch((e: Error) => { throw e })
  }

  /**
   * @function alterColumnNull
   * @param {string} columnName
   * @param {boolean} nullable true = nullable
   * @return {string|Error} create message | error message
   */
  public async alterColumnNull(columnName: string, nullable: boolean = true): Promise<string|Error> {
    await this.client.query(`ALTER TABLE ${this.tableName} ALTER COLUMN ${columnName} `
      + !nullable ? 'SET NOT NULL;' : 'DROP NOT NULL;')
      .then((res: string) => this.posReturn(res, `Column ${columnName} in table ${this.tableName} set to `
        + !nullable ? 'not nullable' : 'nullable'))
      .catch((e: Error) => { throw e })
  }

  /**
   * @function checkColumn
   * @param {string} columnName
   * @param {string} checkCommand command/ function to check in string
   * @return {string|Error} create message | error message
   */
  public async checkColumn(columnName: string, checkCommand: string): Promise<string|Error> {
    await this.client.query(`ALTER TABLE ${this.tableName} ADD CHECK ${checkCommand};`)
      .then((res: string) => this.posReturn(res, `Column ${columnName} in table ${this.tableName} checks `
        + `${checkCommand}`))
      .catch((e: Error) => { throw e })
  }

  /**
   * @function alterColumnConstraint
   * @param {string} columnName
   * @param {string} constName constraint name
   * @param {string} constDef constraint definition
   * @return {string|Error} create message | error message
   */
  public async alterColumnConstraint(columnName: string, constName: string , constDef: string): Promise<string|Error> {
    await this.client.query(`ALTER TABLE ${this.tableName} ADD CONSTRAINT ${constName} ${constDef};`)
      .then((res: string) => this.posReturn(res, `Constraint ${constName} - ${constDef} created in table `
        + `${this.tableName}`))
      .catch((e: Error) => { throw e })
  }

  /**
   * @function renameTable
   * @param {string}
   * @return {string|Error} create message | error message
   */
  public async renameTable(newTableName: string): Promise<string|Error> {
    await this.client.query(`ALTER TABLE ${this.tableName} RENAME TO ${newTableName};`)
      .then((res: string) => {
          this.tableName = newTableName
          this.posReturn(res, `Table ${this.tableName} renamed to ${newTableName}`)
        })
      .catch((e: Error) => { throw e })
  }

  private posReturn(res: string, message: string) {
    return res.length > 0 ? res : message
  }
}
