import React, { PropTypes } from 'react';
import {
  TableRow,
  TableRowColumn,
  FlatButton,
} from 'material-ui';


const onSubmit = (id, deleteRow, showRemoveErrorSnackbar, showRemoveSuccessSnackbar) => {
  deleteRow(id, err => {
    if(err) {
      showRemoveErrorSnackbar(err);
    } else {
      showRemoveSuccessSnackbar();
    }
  });
}

const updateRow = (id) => {
  console.log(id)
}

const Row = ({
  id,
  name,
  surname,
  dateFrom,
  dateTo,
  deleteRow,
  showRemoveErrorSnackbar,
  showRemoveSuccessSnackbar,
  updateRow,
}) => (
  <TableRow key={id}>
    <TableRowColumn>{name}</TableRowColumn>
    <TableRowColumn>{surname}</TableRowColumn>
    <TableRowColumn>{dateFrom.toDateString()}</TableRowColumn>
    <TableRowColumn>{dateTo.toDateString()}</TableRowColumn>
    <TableRowColumn>
      <FlatButton
        label="Update row"
        primary
        onTouchTap={updateRow}
      /> <br />
      <FlatButton
        label="Remove row"
        secondary
        onTouchTap={e => onSubmit(id, deleteRow, showRemoveErrorSnackbar, showRemoveSuccessSnackbar)}
      />
    </TableRowColumn>
  </TableRow>
);

Row.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  dateFrom: PropTypes.instanceOf(Date).isRequired,
  dateTo: PropTypes.instanceOf(Date).isRequired,
  deleteRow: PropTypes.func.isRequired,
  showRemoveErrorSnackbar: PropTypes.func.isRequired,
  showRemoveSuccessSnackbar: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
};

export default Row;
