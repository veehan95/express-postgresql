'use strict'
import PgConnection from '../../connection'
import { logger } from '../../tool/index'

export default class CreateTable {

  /**
   * @function constructor
   * @param {Client} client connection to postgresql
   */
  constructor(protected client: any) {}

  /**
   * @function createTable
   * @param {string} tableName
   * @return {boolean} failed to create will return false
   */
  public async createTable(tableName: string, columns: string[]): Promise<string|Error> {
    return await this.client.query(`CREATE TABLE ${tableName}(${columns.join(',')});`)
      .then((res: string) => res.length > 0 ? res : `Table ${tableName} had been created`)
      .catch((e: any) => {throw e})
  }

}
