import React, { PropTypes } from 'react';
import {
    RaisedButton,
    Toolbar,
    ToolbarGroup,
} from 'material-ui';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const TableAppBar = () =>
  <AppBar
    showMenuIconButton={false}
    title="Simple Table"
    iconElementRight={<FlatButton label="Add row" />}
  />
;

TableAppBar.propTypes = {};

export default TableAppBar;
