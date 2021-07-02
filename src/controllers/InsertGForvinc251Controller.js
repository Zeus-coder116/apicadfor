
const db100110 = require("../config/database3");

exports.createProduct  = async (req, res) => {
 
 const codigogrupo = req.params.codigogrupo;
 const descricao = req.params.descricao;
 
 
 var adescricao = "'"+descricao.toString()+"'";  
 
 //console.log()
 const rows = await db100110.query('INSERT INTO gforvinc(codigogrupo, descricao) VALUES ('+codigogrupo+', '+adescricao+')');


 
 
 return res.json(rows.rows);
  };
