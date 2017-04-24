import React, { PropTypes } from 'react';

import {
  Snackbar,
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui';

import { FullPageLoader } from '/imports/components/Loaders';
import Row from './Row.jsx';
import UpdateDialog from './UpdateDialog.jsx';

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.showRemoveErrorSnackbar = this.showRemoveErrorSnackbar.bind(this);
    this.showRemoveSuccessSnackbar = this.showRemoveSuccessSnackbar.bind(this);
    this.showUpdateRowDialog = this.showUpdateRowDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);

    this.state = {
      openErrorSnackBar: false,
      openErrorSuccessBar: false,
      errorMessage: '',
      showUpdateRowDialog: false,
      rowId: '',
    };
  }

  showRemoveErrorSnackbar(err) {
    this.setState({
      openErrorSnackBar: true,
      errorMessage: err.reason,
    });
  }

  showRemoveSuccessSnackbar() {
    this.setState({
      openErrorSuccessBar: true,
      errorMessage: '',
    });
  }

  showUpdateRowDialog(e, id) {
    this.setState({
      showUpdateRowDialog: true,
      rowId: id,
    });
  }

  hideDialog() {
    this.setState({ showUpdateRowDialog: false });
  }

  render() {
    const {
      deleteRow,
      rows,
      updateThisRow,
      updateError,
    } = this.props;

    const { errorMessage,
      showUpdateRowDialog,
      rowId
    } = this.state;

    return ( <div>
        <Table>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Surname</TableHeaderColumn>
              <TableHeaderColumn>Date from</TableHeaderColumn>
              <TableHeaderColumn>Date to</TableHeaderColumn>
              <TableHeaderColumn>Action</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {rows ? rows.map(row =>
                <Row
                  key={row._id}
                  id={row._id}
                  name={row.name}
                  surname={row.surname}
                  dateFrom={row.dateFrom}
                  dateTo={row.dateTo}
                  deleteRow={deleteRow}
                  showRemoveErrorSnackbar={this.showRemoveErrorSnackbar}
                  showRemoveSuccessSnackbar={this.showRemoveSuccessSnackbar}
                  updateRow={this.showUpdateRowDialog}
                />,
              ) : FullPageLoader()
            }
          </TableBody>
        </Table>

        <Snackbar
          open={this.state.openErrorSnackBar}
          message={errorMessage}
          autoHideDuration={4000}
        />

        <Snackbar
          open={this.state.openErrorSuccessBar}
          message="Row has been removed successfuly"
          autoHideDuration={4000}
        />

        <UpdateDialog
          open={showUpdateRowDialog}
          onClose={this.hideDialog}
          updateThisRow={updateThisRow}
          id={rowId}
          updateError={updateError}
        />
      </div>
    )
  }
};

SimpleTable.propTypes = {
  deleteRow: PropTypes.func.isRequired,
  rows: PropTypes.array.isRequired,
  updateThisRow: PropTypes.func.isRequired,
};

export default SimpleTable;
