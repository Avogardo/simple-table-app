import React, { PropTypes } from 'react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const Row = ({
  id,
  name,
  surname,
  dateFrom,
  dateTo,
}) => {
  console.log(dateTo.toDateString());

  return <TableRow key={id}>
    <TableRowColumn>{name}</TableRowColumn>
    <TableRowColumn>{surname}</TableRowColumn>
    <TableRowColumn>{dateFrom.toDateString()}</TableRowColumn>
    <TableRowColumn>{dateTo.toDateString()}</TableRowColumn>
  </TableRow>
};

Row.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  dateFrom: PropTypes.instanceOf(Date).isRequired,
  dateTo: PropTypes.instanceOf(Date).isRequired,
};

export default Row;
