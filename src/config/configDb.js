//conexion a base de datos
const mysql = require('mysql');

const mysqlConnection = mysql.createPool({
  host:         process.env.veHost,
  user:         process.env.veUser,
  password:     process.env.vePassword,
  database:     process.env.veDatabase,
  port:         process.env.vePort
});

module.exports = mysqlConnection;