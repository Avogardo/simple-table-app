import { Meteor } from 'meteor/meteor';
import { TableData } from './../TableData.js';

Meteor.publish('rows', function publishRows() {
  const query = {};

  const options = {
    fields: {
      name: 1,
      surname: 1,
      dateFrom: 1,
      dateTo: 1,
    },
  };

  return TableData.find(query, options);
});