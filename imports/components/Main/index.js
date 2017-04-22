import { Meteor } from 'meteor/meteor';
import { FullPageLoader } from '/imports/components/Loaders';
import { TableData, actions as TableActions } from '/imports/api/tableData';
import { compose } from 'react-komposer';

import App from './App.jsx';

const composer = ({}, onData) => {
    const projectHandler = Meteor.subscribe('rows');
console.log(projectHandler);
    if (projectHandler.ready()) {
        const tableData = TableData;
console.log(tableData);
        onData(null, {});
    }

    onData(null, {});
};

export default compose(
    composer,
    FullPageLoader,
)(App);
