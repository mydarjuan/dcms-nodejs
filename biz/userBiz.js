const db = require('./common/db');



let getUserById = () => {
  return db.query('select * from user', [1, 2, 3]).then(data => {

  }).catch(reason => {

  });
};


module.exports = {
  getUserById: getUserById
}