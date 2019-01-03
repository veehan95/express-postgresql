'use strict'
import { AlterTable } from '@tool/index'

/**
 * @class DropTables
 * @desciption -
 */
export default class DropTables {

   public main(client: any, pg: any): void {
     const t1 = new AlterTable(pg.getClient(), 'test')
     t1.dropTable()
   }

 }
