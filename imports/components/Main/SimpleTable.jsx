import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import {
  Snackbar,
} from 'material-ui';

import Row from './Row.jsx';

class SimpleTable extends React.Component {
  constructor(props) {
    super(props);
    this.showRemoveErrorSnackbar = this.showRemoveErrorSnackbar.bind(this);
    this.showRemoveSuccessSnackbar = this.showRemoveSuccessSnackbar.bind(this);

    this.state = {
      openErrorSnackBar: false,
      openErrorSuccessBar: false,
      errorMessage: '',
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

  render() {
    const {
      deleteRow,
      rows,
    } = this.props;

    const { errorMessage } = this.state;

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
          {rows.map(row =>
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
              />,
            )
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

      </div>
    )
  }
};

SimpleTable.propTypes = {
  deleteRow: PropTypes.func.isRequired,
  rows: PropTypes.array.isRequired,
};

export default SimpleTable;
