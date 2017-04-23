import React, { PropTypes } from 'react';
import {
  FlatButton,
  Dialog,
} from 'material-ui';


class AddDialog extends React.Component {
  onSubmit(e) {
    e.preventDefault();

    console.log("loko");
  }

  render() {
    const {
      open,
      onClose,
    } = this.props;

    const actions = [
        <FlatButton
          label="Cancel"
          onTouchTap={onClose}
        />,
        <FlatButton
          label="Add"
          primary
          onTouchTap={e => this.onSubmit(e)}
        />,
    ];

    return (
      <div>
        <Dialog
          title="Compose new row"
          actions={actions}
          open={open}
        >

        </Dialog>
      </div>
    );
  }
}

AddDialog.defaultProps = {
  open: false,
};

AddDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddDialog;
