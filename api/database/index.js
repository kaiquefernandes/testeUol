const mysql = require("mysql");

const pool = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  insecureAuth: true,
});

module.exports = {
  executeQuery: function (query) {
    return new Promise(function (resolve, reject) {
      pool.query(`${query};`, function (error, results, fields) {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },
};
