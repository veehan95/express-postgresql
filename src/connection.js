'use strict'

const { Pool } = require('pg')
import { user, host, database, password, port } from '../../config.js'

const connAsPool = async () => {
  const client = new Pool({ user, host, database, password, port })
  client.connect()

  return client
}

export { connAsPool }
