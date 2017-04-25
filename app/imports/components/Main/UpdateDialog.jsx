import React, { PropTypes } from 'react';
import {
  FlatButton,
  Dialog,
  TextField,
  DatePicker,
  Snackbar,
  CardText,
} from 'material-ui';


class UpdateDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);

    this.state = {
      openUpdateSnackBar: false,
      errorMessage: '',
    };
  }

  onSubmit(e, id) {
    e.preventDefault();

    const {
      addNewRow,
      onClose,
      updateThisRow,
      error,
    } = this.props;

    const {
      errorMessage,
    } = this.state;

  const name = this.nameInput.getValue(),
    surname = this.surnameInput.getValue(),
    dateFrom = this.dateFromInput.getDate(),
    dateTo = this.dateToInput.getDate();

    updateThisRow(id, name, surname, dateFrom, dateTo, err => {
      if(err) {
        this.setState({
          errorMessage: err.reason,
          name: '',
          surname: '',
        });
      } else {
        this.setState({
          errorMessage: '',
          openUpdateSnackBar: true,
          name: '',
          surname: '',
        });
        onClose();
      }
    });
  }

  onClose(e) {
    e.preventDefault();
    const {
      onClose,
    } = this.props;

    this.setState({
      errorMessage: '',
      name: '',
      surname: '',
    });
    onClose();
  }

  handleRequestClose() {
    this.setState({
      openUpdateSnackBar: false,
    });
  };

  render() {
    const {
      open,
      rows,
      row,
    } = this.props;

    const {
      errorMessage,
      openUpdateSnackBar,
    } = this.state;

    const actions = [
        <FlatButton
          label="Cancel"
          onTouchTap={e => this.onClose(e)}
        />,
        <FlatButton
          label="Update"
          primary
          onTouchTap={e => this.onSubmit(e, row._id)}
        />,
    ];

    return ( <div>
        <Dialog
          title="Update row"
          actions={actions}
          open={open}
        >
          <TextField
            hintText="Name"
            defaultValue={row.name}
            ref={input => { this.nameInput = input; }}
          />
          <TextField
            hintText="Surname"
            defaultValue={row.surname}
            ref={input => { this.surnameInput = input; }}
          />
          <DatePicker
            hintText="Date from"
            container="inline"
            mode="landscape"
            defaultDate={row.dateFrom}
            ref={input => { this.dateFromInput = input; }}
          />
          <DatePicker
            hintText="Date to"
            container="inline"
            mode="landscape"
            defaultDate={row.dateTo}
            ref={input => { this.dateToInput = input; }}
          />
          {errorMessage ?
            <CardText
              color="red"
            >
              {errorMessage}
            </CardText>
            :
            ''
          }
        </Dialog>

        <Snackbar
          open={openUpdateSnackBar}
          message="Row has been updated!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

UpdateDialog.defaultProps = {
  open: false,
};

UpdateDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  updateThisRow: PropTypes.func.isRequired,
  rows: PropTypes.array.isRequired,
  row: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    dateFrom: PropTypes.instanceOf(Date),
    dateTo: PropTypes.instanceOf(Date),
  }),
};

export default UpdateDialog;
