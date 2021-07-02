const db = require("../config/database3");

exports.listAllProducts  = async (req, res) => {
 
 const rows = await db.query('SELECT codigogrupo, descricao, persaldo, valsaldo, trataqtde FROM grupos order by codigogrupo::integer desc');
 
 
 
 return res.json(rows.rows);
  };
