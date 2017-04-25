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

const UpdateSchema = new SimpleSchema({
  id: {
    type: String,
  },
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

export {
  TableDataSchema,
  RemoveSchema,
  UpdateSchema,
};
