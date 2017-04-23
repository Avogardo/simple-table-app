import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  import '/imports/api/tableData';
  import '/imports/api/tableData/server';
});
