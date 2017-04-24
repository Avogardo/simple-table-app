import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { TableData } from './TableData.js';
import { TableDataSchema } from './schema.js';

export const addRow = new ValidatedMethod({
  name: 'row.add',
  validate: TableDataSchema.validator({ clean: true }),
  run({ name, surname, dateFrom, dateTo }) {

    return TableData.insert({ name, surname, dateFrom, dateTo });

    throw new Meteor.Error(
      'something-went-wrong',
      'Error, something went wrong',
    );
  },
});
