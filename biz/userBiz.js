var esBiz = require('./esBiz');
var getUserById = (userId) => {
  var reqDto = {
    query: {
      match: {
        user_id: userId
      }
    }
  };
  return esBiz.docQuery('user', reqDto);
};

module.exports = {
  getUserById: getUserById
}