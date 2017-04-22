import { Mongo } from 'meteor/mongo';

import { TableDataSchema } from './schema.js';

const TableData = new Mongo.Collection('tabledata');

TableData.attachSchema(TableDataSchema);

export { TableData };
