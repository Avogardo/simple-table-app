import React, { PropTypes } from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {
  FlatButton,
} from 'material-ui';

const Row = ({
  id,
  name,
  surname,
  dateFrom,
  dateTo,
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
      /> <br />
      <FlatButton
        label="Remove row"
        secondary
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
};

export default Row;
