import React, { PropTypes } from 'react';
import SimpleTable from './SimpleTable.jsx';
import TableAppBar from './TableAppBar.jsx';
import AddDialog from './AddDialog.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


class Main extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
    this.showAddRowDialog = this.showAddRowDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    const projectHandler = Meteor.subscribe('rows');

    this.state = {
      showAddRowDialog: false,
    };
  }

  componentWillUnmount() {
    this.state.subscription.stop();
  }

  showAddRowDialog() {
    this.setState({ showAddRowDialog: true });
  }

  hideDialog() {
    this.setState({ showAddRowDialog: false });
  }

  render() {
    const {
      addNewRow,
      TableData,
      deleteRow,
    } = this.props;

    const { showAddRowDialog } = this.state;

    const rows = TableData.find({}).fetch();

    return ( <div>
        <TableAppBar
          addRow={this.showAddRowDialog}
        />

        <SimpleTable
          deleteRow={deleteRow}
          rows={rows}
        />

        <AddDialog
          open={showAddRowDialog}
          onClose={this.hideDialog}
          addNewRow={addNewRow}
        />
      </div>
    );
  }
};

Main.propTypes = {
  addNewRow: PropTypes.func.isRequired,
  deleteRow: PropTypes.func.isRequired,
};

export default Main;
