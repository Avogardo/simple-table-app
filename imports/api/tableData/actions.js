import { addRow } from './methods.js';

const addNewRow = (name, surname, dateFrom, dateTo, callback = () => {}) =>
    addRow.call({ name, surname, dateFrom, dateTo }, callback);

const actions = {
  addNewRow
};


export { actions };
