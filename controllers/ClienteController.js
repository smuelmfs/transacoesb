const { Cliente } = require ('../models/');
const { Op, DOUBLE } = require("sequelize");

class ClienteController {

    async create(req,res) {
        try {
            let cliente = {
                
                nome: String(req.body.nome),
                cpf: Number(req.body.cpf),
                sexo: String(req.body.sexo),
                salario: Number(req.body.salario),
                contato: Number(req.body.contato),
            }
            const clienteResult = await Cliente.create(cliente);
            return res.status(200).json(clienteResult); 
        } catch (err) {
            return res.status(400).json({error: err.mesage});
        }
    }
    async getAll(req,res) {
         try {
             const cliente = await Cliente.findAll({
               
            });
            return res.status(200).json(cliente);
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async getOne(req,res) {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            if (cliente)
                return res.status(200).json(cliente);
            else 
                return res.status(200).json({mensagem: "Cliente não encontrado"});
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async update(req,res) {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            if (cliente) {
                /* req.body
                { nome, titulos, dataFundacao } */
                await cliente.update(req.body);
                return res.status(200).json(cliente);
            }
            else {
                return res.status(200).json({mensagem: "Cliente não encontrado para atualizar"});
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    async delete (req,res) {
        try {
            const cliente = await Cliente.findByPk(req.params.id);
            if (cliente) {                
                await cliente.destroy();
                return res.status(200).json(cliente);
            }
            else {
                return res.status(200).json({mensagem: "Cliente não encontrado para deletar"});
            }
        }
        catch(err) {
            res.status(400).json({error: err.message})
        }
    }

    // async getAllByNome (req,res) {
    //     let nome = '%' + req.query.nome + '%';
    //     try {
    //         const times = await Time.findAll({
    //             where: {
    //                 nome: {
    //                     [Op.like]: nome
    //                     // [Op.eq]: // 
    //                 }
    //             }
    //         });

    //         if (times)
    //             return res.status(200).json(times);
    //         else
    //             return res.status(200).json({mensagem: "Não foram encontrados times"})
    //     }
    //     catch(err) {

    //     }
    // }

}
module.exports = new ClienteController();