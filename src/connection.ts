'use strict'
import { Client } from 'pg'
import { user, host, database, password, port } from './config'

export default class PgConnection {

  protected client: Client

  /**
   * @function constructor
   * @description create client connection to postgres
   */
  constructor() {
    this.client = new Client({ user, host, database, password, port })
    this.client.connect()
  }

  /**
   * @function getClient
   * @return {Client} query function
   * @description return client
   */
  public getClient(): Client {
    return this.client
  }

  /**
   * @function end
   * @description end the connection to postgresql
   */
  public async end(): Promise<void> {
    return this.client.end()
  }

}
