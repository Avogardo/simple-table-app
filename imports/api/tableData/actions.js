import { addRow } from './methods.js';

const addNewRow = (name, surname, dateFrom, dateTo) => new Promise((resolve, reject) => {
  addRow.call({ name, surname, dateFrom, dateTo }, (err, res) => {
    if (err) {
      const error = new Error(err.reason || err);
      reject(error);
    }
    resolve(res);
  });
});

const actions = {
  addNewRow
};


export { actions };
