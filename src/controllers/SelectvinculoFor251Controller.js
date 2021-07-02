const db251 = require("../config/database251");

exports.listAllProducts  = async (req, res) => {
 const vinculo = req.params.vinculo;
 

 const rows = await db251.query('SELECT DISTINCT fv_fabricantes_cnpj FROM public.erp_fabricantes_vinculado WHERE fv_vinculacao_id = '+vinculo+'  LIMIT 1');
 
 
 
 
 return res.json(rows.rows);
  };
