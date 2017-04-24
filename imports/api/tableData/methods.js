import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { TableData } from './TableData.js';
import {
  TableDataSchema,
  RemoveSchema,
  UpdateSchema,
} from './schema.js';

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

export const removeRow = new ValidatedMethod({
  name: 'row.remove',
  validate: RemoveSchema.validator({ clean: true }),
  run({ id }) {
    return TableData.remove({ _id: id });

    throw new Meteor.Error(
      'something-went-wrong',
      'Error, something went wrong, because something went wrong',
    );
  },
});

export const updateRow = new ValidatedMethod({
  name: 'row.update',
  validate: UpdateSchema.validator({ clean: true }),
  run({ id, name, surname, dateFrom, dateTo }) {
    return TableData.update(id, {
      $set: {
        name: name,
        surname: surname,
        dateFrom: dateFrom,
        dateTo: dateTo,
      },
    });

    throw new Meteor.Error(
      'something-went-wrong',
      'Something went wrong, because error',
    );
  },
});