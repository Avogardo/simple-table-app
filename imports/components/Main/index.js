import { Meteor } from 'meteor/meteor';
import { FullPageLoader } from '/imports/components/Loaders';
import { TableData, actions as tableActions } from '/imports/api/tableData';
import { compose } from 'react-komposer';

import App from './App.jsx';

const composer = ({}, onData) => {
  const projectHandler = Meteor.subscribe('rows');



  onData(null, {
    addNewRow: tableActions.addNewRow,
  });
};

export default compose(
  composer,
  FullPageLoader,
)(App);
