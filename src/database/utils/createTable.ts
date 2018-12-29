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
  public async createTable(tableName: string): Promise<boolean> {
    const columns = [
      'user_id serial PRIMARY KEY',
      'username VARCHAR (50) UNIQUE NOT NULL',
      'password VARCHAR (50) NOT NULL',
      'email VARCHAR (355) UNIQUE NOT NULL',
      'created_on TIMESTAMP NOT NULL',
      'last_login TIMESTAMP',
    ]
    await this.client.query(`CREATE TABLE ${tableName}(${columns.join(',')});`)
      .then((res: string) => logger.info(res))
      .catch((e: any) => logger.fatal(e.stack))
    return true
  }

}
