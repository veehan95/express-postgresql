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
import CreateTable from './utils/createTable'
import AlterTable from './utils/alterTable'
import PgConnection from '../connection'
import { logger } from '../tool/index'

const pg = new PgConnection()
const tf = new CreateTable(pg.getClient())

// tf.createTable('q2')
//  .then(result => pg.end())
const t1 = new AlterTable(pg.getClient(), 'account')
t1.connect()
  .then(result => {
    logger.info(result)
    t1.addColumn('jasmineLimKhiawM', 'boolean')
      .then(res => typeof res == 'string' ? logger.info(res) : null)
      .catch(err => logger.error(err))
  })
  .catch((e: any) => {
    logger.error(e)
  })
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
