import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


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
