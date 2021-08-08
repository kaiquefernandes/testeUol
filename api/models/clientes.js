const db = require('../database/index.js')
const moment = require('moment')

exports.insertClient = async (ctx) => {
    let query = `INSERT INTO CLIENTES VALUES ("", "${ctx.nome}", "${moment(ctx.data_nascimento, "DD/MM/YYYY").format('YYYY-MM-DD')}", "${ctx.sexo}", ${ctx.idade}, "${ctx.cidade}", "${ moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}")`
    const data = await db.executeQuery(query, 0, 1000)
    return data
}

exports.getClient = async (ctx) => {
    let query = `SELECT * FROM CLIENTES WHERE `
    ctx.id && ctx.nome ? query += `NOME = "${ctx.nome}" AND  ID = "${ctx.id}"` :
        (ctx.id ? query += `ID = "${ctx.id}" ` : query += ` NOME = "${ctx.nome}" `)

    const data = await db.executeQuery(query, 0, 1000)
    return data[0]
}

exports.updateClient = async (ctx) => {
    let query = `UPDATE CLIENTES SET NOME = "${ctx.nome}" WHERE ID = ${ctx.id} `
    const data = await db.executeQuery(query, 0, 1000)
    return data
}

exports.deleteClient = async (ctx) => {
    let query = `DELETE FROM CLIENTES WHERE ID = ${ctx.id} `
    const data = await db.executeQuery(query, 0, 1000)
    return data
}