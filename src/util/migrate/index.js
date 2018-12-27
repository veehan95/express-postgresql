'use strict'

const createFile = require('./src/create.js').createFile
const helpList = require('./src/help.js').help

switch (process.argv[2].toLowerCase()){
  case 'g':
  case'generate':
    createFile(process.argv[3], process.argv[4]).then(msg => console.log(msg))
    break
  case 'h':
  case 'help':
    console.log(helpList)
    break
}
