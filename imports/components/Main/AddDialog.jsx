import React, { PropTypes } from 'react';
import {
  FlatButton,
  Dialog,
  TextField,
  DatePicker,
  Snackbar,
  CardText,
} from 'material-ui';


class AddDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);

    this.state = {
      name: '',
      surname: '',
      dateFrom: new Date(),
      dateTo: new Date(),
      openAddSnackBar: false,
      errorMessage: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      addNewRow,
      onClose
    } = this.props;

    const {
      name,
      surname,
      dateFrom,
      dateTo,
    } = this.state;

    addNewRow(name, surname, dateFrom, dateTo, (err) => {
      if(err) {
          this.setState({
            errorMessage: err.reason,
          });
      } else {
        this.setState({
          errorMessage: '',
          openAddSnackBar: true,
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
      openAddSnackBar: false,
    });
  };

  render() {
    const { open } = this.props;

    const { errorMessage, openAddSnackBar } = this.state;

    const actions = [
        <FlatButton
          label="Cancel"
          onTouchTap={e => this.onClose(e)}
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
          <TextField
            hintText="Name"
            onChange={e => this.onChangeName(e)}
          />
          <TextField
            hintText="Surname"
            onChange={e => this.onChangeSurname(e)}
          />
          <DatePicker
            hintText="Date from"
            container="inline"
            mode="landscape"
            onChange={(nullValue, e) => this.onChangeDateFrom(nullValue, e)}
          />
          <DatePicker
            hintText="Date to"
            container="inline"
            mode="landscape"
            onChange={(nullValue, e) => this.onChangeDateTo(nullValue, e)}
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
          open={openAddSnackBar}
          message="New row has been added!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
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
  addNewRow: PropTypes.func.isRequired,
};

export default AddDialog;
