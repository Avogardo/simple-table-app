import React, { PropTypes } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Row from './Row.jsx';

const SimpleTable = ({
  addNewRow,
  rows,
}) => {
  console.log(rows);

  return <Table>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
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
          />,
        )
      }
    </TableBody>
  </Table>
};

SimpleTable.propTypes = {
  addNewRow: PropTypes.func.isRequired,
  rows: PropTypes.array.isRequired,
};

export default SimpleTable;
