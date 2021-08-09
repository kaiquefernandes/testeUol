const clienteModel = require('../models/clientes')
let resp = '';
exports.getClient = async (req, res) => {
    try {

        let {
            id,
            nome
        } = req.query

        if(!id && !nome){
            return res.status(500).json({"warning":"esta faltando parametros!"})
        }

        resp = await clienteModel.getClient({
            id,
            nome
        })
        resp = (!resp ? res.status(500).json( {"warning": "nenhum dado encontrado"}): res.status(200).json( resp))
        return resp

    } catch (err) {
        res.status(500).json({"Error" : err })
        console.log(err)
    }
}

exports.insertCliente = async (req, res) => {
    try {

        let {
            nome,
            data_nascimento,
            sexo,
            idade,
            cidade
        } = req.body

        if(!nome && !data_nascimento && !sexo && !cidade){
            return res.status(500).json({"warning":"esta faltando parametros!"})
        }
        
        resp = await clienteModel.insertClient({
            nome,
            data_nascimento,
            sexo,
            idade,
            cidade
        })

        res.status(201).json({"dado inserido!":resp})

    } catch (err) {
        res.status(500).json({"Error" : err })
        console.log(err)
    }
}

exports.updateCliente = async (req, res) => {
    try {

        let {
            id,
            nome,
        } = req.body

        if(!id && !nome){
            return res.status(500).json({"warning":"esta faltando parametros!"})
        }

        let resp = await clienteModel.updateClient({
            nome,id
        })

        resp = (resp.affectedRows == 0 ? res.status(500).json( {"warning": "nenhum dado encontrado"}): res.status(200).json({"success":"dado alterado!"}))
        return resp

    } catch (err) {
        res.status(500).json({"Error" : err })
        console.log(err)
    }
}

exports.deleteCliente = async (req, res) => {
    try {

        let {
            id,
        } = req.body

        if(!id){
            return res.status(500).json({"warning":"esta faltando parametros!"})
        }

        resp = await clienteModel.deleteClient({
            id
        })

 
        resp = (resp.affectedRows == 0 ? res.status(500).json( {"warning": "nenhum dado encontrado"}) : res.status(200).json({"success":"dado deletado!"}))
        return resp
        
    } catch (err) {
        res.status(500).json({"Error" : err })
        console.log(err)
    }
}