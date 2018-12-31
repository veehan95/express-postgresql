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

  public main() {
      fs.readdir('./src/database/migrates', (err: Error, items: string[]) => {
        items.forEach(script => {
          const t = require(`../migrates/${script.substring(0, script.length - 3)}`)
          const temp = new t.default()
          temp.main(this.client, this.pg)
        })
      })
  }

}
