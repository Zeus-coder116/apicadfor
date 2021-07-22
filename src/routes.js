const express = require('express');





const InsertFor251Controller = require('./controllers/InsertFor251Controller');

const SelectvinculoFor251Controller = require('./controllers/SelectvinculoFor251Controller');

const SelectcodigoFor251Controller = require('./controllers/SelectcodigoFor251Controller');

const SelectrevistaFor251Controller = require('./controllers/SelectrevistaFor251Controller');

const InsertRevFor251Controller = require('./controllers/InsertRevFor251Controller');

const SelectRevFor251Controller = require('./controllers/SelectRevFor251Controller');

const SelectGrupFor251Controller = require('./controllers/SelectGrupFor251Controller');

const SelectGrupVinFor251Controller = require('./controllers/SelectGrupVinFor251Controller');

const InsertGrupo251Controller = require('./controllers/InsertGrupo251Controller');

const InsertGForvinc251Controller = require('./controllers/InsertGForvinc251Controller');

const usuarios = require('./controllers/usuarios');

const routes = express.Router();


routes.post('/insert/:codigo/:nome/:prinome/:seguimento/:seguimentogestao/:revistaparalelo/:revista/:comissao/:acrescimo/:vinculo/:cpfcnpj/:codigogrupofvincula/:codigogrupoforgrupo/:grupo/:ativo/:nomeabreviado',InsertFor251Controller.createProduct);

routes.post('/InsertRevFor251/:revistas_id/:revistas_nome/:revistas_lancamento/:revistas_ivendas/:revistas_prelanc',InsertRevFor251Controller.createProduct);

routes.get('/SelectRevFor251',SelectRevFor251Controller.listAllProducts);

routes.get('/SelectGrupFor251Controller',SelectGrupFor251Controller.listAllProducts);

routes.get('/SelectGrupVinFor251Controller',SelectGrupVinFor251Controller.listAllProducts);

routes.get('/selectvinculo/:vinculo/',SelectvinculoFor251Controller.listAllProducts);

routes.get('/selectcodigo/:codigo/',SelectcodigoFor251Controller.listAllProducts);

routes.get('/selectrevista/',SelectrevistaFor251Controller.listAllProducts);

routes.post('/InsertGrupo251Controller/:codigogrupo/:descricao',InsertGrupo251Controller.createProduct);

routes.post('/InsertGForvinc251Controller/:codigogrupo/:descricao',InsertGForvinc251Controller.createProduct);

routes.get('/usuarios/:usu_login/:usu_senha',usuarios.listAllProducts);



module.exports = routes;
