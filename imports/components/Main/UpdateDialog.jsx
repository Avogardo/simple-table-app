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
      name: '',
      surname: '',
      dateFrom: new Date(),
      dateTo: new Date(),
      openUpdateSnackBar: false,
      errorMessage: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      id,
      addNewRow,
      onClose,
      updateThisRow,
      error,
    } = this.props;

    const {
      name,
      surname,
      dateFrom,
      dateTo,
      errorMessage,
    } = this.state;

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

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeSurname(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  onChangeDateFrom(nullValue, date) {
    this.setState({
      dateFrom: date,
    });
  }

  onChangeDateTo(nullValue, date) {
    this.setState({
      dateTo: date,
    });
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
      id,
      row,
    } = this.props;

    const {
      errorMessage,
      openUpdateSnackBar,
      dateFrom,
      dateTo,
    } = this.state;

console.log(row);

    const actions = [
        <FlatButton
          label="Cancel"
          onTouchTap={e => this.onClose(e)}
        />,
        <FlatButton
          label="Update"
          primary
          onTouchTap={e => this.onSubmit(e)}
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
            onChange={e => this.onChangeName(e)}
            defaultValue={row.name}
          />
          <TextField
            hintText="Surname"
            onChange={e => this.onChangeSurname(e)}
            defaultValue={row.surname}
          />
          <DatePicker
            hintText="Date from"
            container="inline"
            mode="landscape"
            onChange={(nullValue, e) => this.onChangeDateFrom(nullValue, e)}
            defaultDate={row.dateFrom}
          />
          <DatePicker
            hintText="Date to"
            container="inline"
            mode="landscape"
            onChange={(nullValue, e) => this.onChangeDateTo(nullValue, e)}
            defaultDate={row.dateTo}
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
  id: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  //row:
};

export default UpdateDialog;
