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
console.log(Math.floor(Date.now() / 1000))
