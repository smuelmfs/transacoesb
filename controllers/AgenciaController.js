const { Agencia } = require ('../models/');
const { Op } = require("sequelize");

class AgenciaController {

    async create(req,res) {
        try {
            let agencia = {
                numero: Number(req.body.numero),
                descricao: String(req.body.descricao),
                idbanco: Number(req.body.idbanco),
            }
            const agenciaResult = await Agencia.create(agencia);
            return res.status(200).json(agenciaResult); 
        } catch (err) {
            return res.status(400).json({error: err.mesage});
        }
    }
    async getAll(req,res) {
         try {
             const agencia = await Agencia.findAll({
               
            });
            return res.status(200).json(agencia);
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async getOne(req,res) {
        try {
            const agencia = await Agencia.findByPk(req.params.id);
            if (agencia)
                return res.status(200).json(agencia);
            else 
                return res.status(200).json({mensagem: "Agencia não encontrada"});
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async update(req,res) {
        try {
            const agencia = await Agencia.findByPk(req.params.id);
            if (agencia) {
                /* req.body
                { nome, titulos, dataFundacao } */
                await agencia.update(req.body);
                return res.status(200).json(agencia);
            }
            else {
                return res.status(200).json({mensagem: "Agencia não encontrada para atualizar"});
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async delete (req,res) {
        try {
            const agencia = await Agencia.findByPk(req.params.id);
            if (agencia) {                
                await agencia.destroy();
                return res.status(200).json(agencia);
            }
            else {
                return res.status(200).json({mensagem: "Agencia não encontrada para deletar"});
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }
}
module.exports = new AgenciaController();