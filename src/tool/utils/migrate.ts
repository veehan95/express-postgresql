'use strict'
import PgConnection from '../../connection'
import * as fs from 'fs'

export default class Migrate {

  protected client: any
  protected pg: any

  constructor() {
    this.pg = new PgConnection()
    this.client = this.pg.getClient()
  }

  public async main() {
      return await fs.readdir('./src/database/migrates', (err: Error, items: string[]) => {
        items.forEach(script => {
          // const t = require(`../../databse/migrates/${script.substring(0, script.length - 3)}`)
          // const temp = new t.default()
          // temp.main(this.client, this.pg)
        })
      })
  }

  public async end() {
    this.pg.end()
  }

}
