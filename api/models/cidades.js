const db = require('../database/index.js')
const moment = require('moment')

exports.insertCity = async (ctx) => {
    let query = `INSERT INTO CIDADES VALUES ("", "${ctx.cidade}", "${ctx.estado}", "${ moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}")`
    const data = await db.executeQuery(query, 0, 1000)
    return data[0]
}

exports.getCity = async (ctx) => {
    let query = `SELECT * FROM CIDADES WHERE `
    ctx.cidade && ctx.estado ? query += `NOME = "${ctx.cidade}" AND  ESTADO = "${ctx.estado}"` :
        (ctx.cidade ? query += `NOME = "${ctx.cidade}" ` : query += ` ESTADO = "${ctx.estado}" `)

    const data = await db.executeQuery(query, 0, 1000)
    return data[0]
}