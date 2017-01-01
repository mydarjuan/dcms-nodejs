var mysql = require('mysql');
var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: ''
});

let _conn = () => {
  pool.getConnection((err, connection) => {});
};

let _query = (sql, params) => {
  pool.query(sql, params).then((data) => {
    return data;
  });
};


module.exports = {
  conn: _conn,
  query: _query
}