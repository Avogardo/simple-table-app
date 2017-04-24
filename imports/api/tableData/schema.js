import SimpleSchema from 'simpl-schema';

const TableDataSchema = new SimpleSchema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  dateFrom: {
    type: Date,
  },
  dateTo: {
    type: Date,
  },
});

const RemoveSchema = new SimpleSchema({
  id: {
    type: String,
  },
});

export {
  TableDataSchema,
  RemoveSchema,
};
