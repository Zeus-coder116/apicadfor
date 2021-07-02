const db = require("../config/database2");

exports.listAllProducts  = async (req, res) => {

 const rows = await db.query('SELECT * \r\
 FROM public.erp_revistas \r\
 where rev_num_rev >= 0 order by rev_num_rev');
 
 
 
 
 return res.json(rows.rows);
  };



