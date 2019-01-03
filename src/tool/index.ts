import Pino from './logger/pino'

const logger = new Pino()

export { logger }
'use strict'
/*
const { Pool } = require('pg')

const client = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
})
client.connect()
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)')
    .then(res => console.log(res))
    .catch(e => console.error(e.stack))*/
// import Migrate from './utils/migrate'
// const m = new Migrate()
// m.main()// .then(() => m.end())

  /*
const t2 = new AlterTable(pg.getClient(), 'jasmine')
t2.connect()
  .then(result => {
    logger.info(result)
    pg.end()
  })
  .catch((e: any) => {
    logger.error(e)
    pg.end()
  })
  */
