import {
  addRow,
  removeRow,
} from './methods.js';

const addNewRow = (name, surname, dateFrom, dateTo, callback = () => {}) =>
  addRow.call({ name, surname, dateFrom, dateTo }, callback);

const deleteRow = (id, callback = () => {}) =>
  removeRow.call({ id }, callback);

const actions = {
  addNewRow,
  deleteRow,
};


export { actions };
