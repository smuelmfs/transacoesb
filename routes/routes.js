const { Router } = require('express');
const BancoController = require('../controllers/BancoController');
const AgenciaController = require('../controllers/AgenciaController');
const ClienteController = require('../controllers/ClienteController');
const routes = Router();

routes.get('/', (req,res) => {
    res.status(200).json({mensagem: "Hello World"})
});
//BANCO
routes.get('/banco', BancoController.getAll);
routes.get('/banco/:id', BancoController.getOne);
routes.post('/banco', BancoController.create);
routes.put('/banco/:id', BancoController.update);
routes.delete('/banco/:id', BancoController.delete);

//AGENCIA
routes.get('/agencia', AgenciaController.getAll);
routes.get('/agencia/:id', AgenciaController.getOne);
routes.post('/agencia', AgenciaController.create);
routes.put('/agencia/:id', AgenciaController.update);
routes.delete('/agencia/:id', AgenciaController.delete);

//CLIENTE
routes.get('/cliente', ClienteController.getAll);
routes.get('/cliente/:id', ClienteController.getOne);
routes.post('/cliente', ClienteController.create);
routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.delete); 

module.exports = routes;