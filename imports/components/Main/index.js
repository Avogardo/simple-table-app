import { Meteor } from 'meteor/meteor';
import { FullPageLoader } from '/imports/components/Loaders';
import { compose } from 'react-komposer';

import {
  TableData,
  actions as tableActions
} from '/imports/api/tableData';

import Main from './Main.jsx';


const composer = (props, onData) => {
  const projectHandler = Meteor.subscribe('rows');
console.log(projectHandler);

  if (projectHandler.ready()) {
    console.log('ready');

    const rows = TableData.find({}).fetch();
    console.log(rows);

    onData(null, {
      addNewRow: tableActions.addNewRow,
    });
  }
};

export default compose(
  composer,
  FullPageLoader,
)(Main);
