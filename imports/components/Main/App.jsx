import React, { PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SimpleTable from './SimpleTable.jsx';

const App = (props) => {
  const { addNewRow } = props;

  return <MuiThemeProvider>
  <div>
    />

    <SimpleTable
      addNewRow={addNewRow}
    />
    </div>
  </MuiThemeProvider>
};

App.propTypes = {
  addNewRow: PropTypes.func.isRequired,
};

export default App;
