const { Banco } = require ('../models/');
const { Op } = require("sequelize");

class BancoController {

    async create(req,res) {
        try {
            let banco = {
                cnpj: Number(req.body.cnpj),
                razaosocial: String(req.body.razaosocial),
                contato: Number(req.body.contato),
            }
            const bancoResult = await Banco.create(banco);
            return res.status(200).json(bancoResult); 
        } catch (err) {
            return res.status(400).json({error: err.mesage});
        }
    }
    async getAll(req,res) {
         try {
             const banco = await Banco.findAll({
               
            });
            return res.status(200).json(banco);
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async getOne(req,res) {
        try {
            const banco = await Banco.findByPk(req.params.id);
            if (banco)
                return res.status(200).json(banco);
            else 
                return res.status(200).json({mensagem: "Banco não encontrado"});
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async update(req,res) {
        try {
            const banco = await Banco.findByPk(req.params.id);
            if (banco) {
                /* req.body
                { nome, titulos, dataFundacao } */
                await banco.update(req.body);
                return res.status(200).json(banco);
            }
            else {
                return res.status(200).json({mensagem: "Banco não encontrado para atualizar"});
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async delete (req,res) {
        try {
            const banco = await Banco.findByPk(req.params.id);
            if (banco) {                
                await banco.destroy();
                return res.status(200).json(banco);
            }
            else {
                return res.status(200).json({mensagem: "Time não encontrado para deletar"});
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }
}

module.exports = new BancoController();