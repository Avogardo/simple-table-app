import { Meteor } from 'meteor/meteor';
import { FullPageLoader } from '/imports/components/Loaders';
import { compose } from 'react-komposer';

import {
  TableData,
  actions as tableActions
} from '/imports/api/tableData';

import Main from './Main.jsx';


const composer = (props, onData) => {
  const updateThisRow = tableActions.updateThisRow;

  const onUpdate = (id, name, surname, dateFrom, dateTo) => {
    updateThisRow(id, name, surname, dateFrom, dateTo, err => {
      if(err) {
        onData(null, {
          addNewRow: tableActions.addNewRow,
          deleteRow: tableActions.deleteRow,
          TableData,
          err,
        });
      }
    });
  }

  onData(null, {
    addNewRow: tableActions.addNewRow,
    deleteRow: tableActions.deleteRow,
    onUpdate,
    TableData,
  });
};

export default compose(
  composer,
  FullPageLoader,
)(Main);
