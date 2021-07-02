
const db100110 = require("../config/database3");

exports.createProduct  = async (req, res) => {
 
 const codigogrupo = req.params.codigogrupo;
 const descricao = req.params.descricao;
 
 var acodigogrupo = "'"+codigogrupo.toString()+"'";
 var adescricao = "'"+descricao.toString()+"'";
 var N = "'N'";  
 
 console.log(acodigogrupo,adescricao,N);

 const rows = await db100110.query('INSERT INTO grupos(codigogrupo, descricao, persaldo, valsaldo, trataqtde) VALUES ('+acodigogrupo+', '+adescricao+', 0.00 ,0.00 ,'+N+' )');

 
 
 return res.json(rows.rows);
  };
