import React, { PropTypes } from 'react';
import {
  AppBar,
  FlatButton,
} from 'material-ui';


const TableAppBar = ({ addRow }) =>
  <AppBar
    showMenuIconButton={false}
    title="Simple Table"
    iconElementRight={<FlatButton label="Add row" onTouchTap={addRow} />}
  />
;

TableAppBar.propTypes = {
  addRow: PropTypes.func.isRequired,
};

export default TableAppBar;
