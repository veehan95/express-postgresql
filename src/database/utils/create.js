'use strict'

const createDatabase = (dbName) => {
  return `CREATE DATABASE ${dbName};`
}

const createTable = (tableName) => {
  return `CREATE TABLE ${tableName};`
}

export { createDatabase, createTable }
