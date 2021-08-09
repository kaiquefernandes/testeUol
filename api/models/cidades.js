const db = require("../database/index.js");
const moment = require("moment");

exports.insertCity = async (ctx) => {
  const { cidade, estado } = ctx;
  let query = `INSERT INTO CIDADES VALUES ("", "${cidade}", "${estado}", "${moment(
    new Date()
  ).format("YYYY-MM-DD HH:mm:ss")}")`;
  const data = await db.executeQuery(query, 0, 1000);
  return data[0];
};

exports.getCity = async (ctx) => {
  const { cidade, estado } = ctx;
  let query = `SELECT * FROM CIDADES WHERE `;
  cidade && estado
    ? (query += `NOME = "${cidade}" AND  ESTADO = "${estado}"`)
    : cidade
    ? (query += `NOME = "${cidade}" `)
    : (query += ` ESTADO = "${estado}" `);

  const data = await db.executeQuery(query, 0, 1000);
  return data[0];
};
