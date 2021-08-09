const cidadeModel = require("../models/cidades");
let resp = "";
exports.getCity = async (req, res) => {
  try {
    let { cidade, estado } = req.query;

    if (!cidade && !estado) {
      return res
        .status(500)
        .json({ warning: "esta faltando campo cidade ou estado" });
    }

    resp = await cidadeModel.getCity({
      cidade,
      estado,
    });

    resp = !resp
      ? res.status(500).json({ warning: "nenhum dado encontrado" })
      : res.status(200).json(resp);
    return resp;
  } catch (err) {
    res.status(500).json({ Error: err });
    console.log(err);
  }
};

exports.insertCity = async (req, res) => {
  try {
    let { cidade, estado } = req.body;

    if (!cidade && !estado) {
      return res
        .status(500)
        .json({ warning: "esta faltando campo cidade ou estado" });
    }

    await cidadeModel.insertCity({
      cidade,
      estado,
    });

    res.status(201).json("dado inserido!");
  } catch (err) {
    res.status(500).json({ Error: err });
    console.log(err);
  }
};
