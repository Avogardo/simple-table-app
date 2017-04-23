import React, { PropTypes } from 'react';


import SimpleTable from './SimpleTable.jsx';
import TableAppBar from './TableAppBar.jsx';
import AddDialog from './AddDialog.jsx';




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.showAddRowDialog = this.showAddRowDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);

    this.state = {
      showAddRowDialog: false,
    };
  }

  showAddRowDialog() {
    this.setState({ showAddRowDialog: true });
  }

  hideDialog() {
    this.setState({ showAddRowDialog: false });
  }

  render() {
    const { addNewRow } = this.props;
    const { showAddRowDialog } = this.state;

    return (
        <div>
          <TableAppBar
            addRow={this.showAddRowDialog}
          />

          <SimpleTable
            addNewRow={addNewRow}
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
};

export default Main;
