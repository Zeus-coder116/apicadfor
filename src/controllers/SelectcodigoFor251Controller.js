const db251 = require("../config/database251");

exports.listAllProducts  = async (req, res) => {
 const codigo = req.params.codigo;
 

 const rows = await db251.query('select * \r\
 from erp_fabricantes \r\
 inner join erp_fabricantes_vinculado on erp_fabricantes_vinculado.fv_fabricantes_id =  erp_fabricantes.fabricantes_id \r\
 inner join erp_segmento on erp_segmento.segmento_id =  erp_fabricantes.fabricantes_segmento_id \r\
 inner join erp_fabricante_grupo on erp_fabricante_grupo.fg_fabricantes_id = erp_fabricantes.fabricantes_id \r\
 inner join erp_grupo on erp_grupo.grupo_id = erp_fabricante_grupo.fg_grupo_id \r\
 where fabricantes_id = '+codigo+'');
 
 
 
 
 return res.json(rows.rows);
  };
