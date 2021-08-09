const db = require('../database/index.js')
const moment = require('moment')

exports.insertClient = async (ctx) => {
    const {nome,
        data_nascimento,
        sexo,
        idade,
        cidade
    } = ctx
    let query = `INSERT INTO CLIENTES VALUES ("", "${nome}", "${moment(data_nascimento, "DD/MM/YYYY").format('YYYY-MM-DD')}", "${sexo}", ${idade}, "${cidade}", "${ moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}")`
    const data = await db.executeQuery(query, 0, 1000)
    return data
}

exports.getClient = async (ctx) => {
    const {nome, id } = ctx
    let query = `SELECT * FROM CLIENTES WHERE `
    id && nome ? query += `NOME = "${nome}" AND  ID = "${id}"` :
        (id ? query += `ID = "${id}" ` : query += ` NOME = "${nome}" `)

    const data = await db.executeQuery(query, 0, 1000)
    return data[0]
}

exports.updateClient = async (ctx) => {
    const {nome, id } = ctx
    let query = `UPDATE CLIENTES SET NOME = "${nome}" WHERE ID = ${id} `
    const data = await db.executeQuery(query, 0, 1000)
    return data
}

exports.deleteClient = async (ctx) => {
    const { id } = ctx
    let query = `DELETE FROM CLIENTES WHERE ID = ${id} `
    const data = await db.executeQuery(query, 0, 1000)
    return data
}