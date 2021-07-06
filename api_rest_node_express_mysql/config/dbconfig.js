const mysql = require("mysql");

const configDB = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "db_angular_test",
});

configDB.connect(function (error) {
  if (error) {
    throw error;
  } else {
  }
});

module.exports = configDB;
