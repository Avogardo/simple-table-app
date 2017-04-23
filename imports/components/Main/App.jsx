import React, { PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleTable from './SimpleTable.jsx';
import TableAppBar from './TableAppBar.jsx';
import AddDialog from './AddDialog.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends React.Component {
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
      <MuiThemeProvider>
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
      </MuiThemeProvider>
    );
  }
};

App.propTypes = {
  addNewRow: PropTypes.func.isRequired,
};

export default App;
