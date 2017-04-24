import {
  addRow,
  removeRow,
  updateRow,
} from './methods.js';

const addNewRow = (name, surname, dateFrom, dateTo, callback = () => {}) =>
  addRow.call({ name, surname, dateFrom, dateTo }, callback);

const deleteRow = (id, callback = () => {}) =>
  removeRow.call({ id }, callback);

const updateThisRow = (id, name, surname, dateFrom, dateTo, callback = () => {}) =>
  updateRow.call({ id, name, surname, dateFrom, dateTo }, callback);

const actions = {
  addNewRow,
  deleteRow,
  updateThisRow,
};

export { actions };
