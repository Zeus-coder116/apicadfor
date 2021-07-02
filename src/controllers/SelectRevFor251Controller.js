const db = require("../config/database2");

exports.listAllProducts  = async (req, res) => {
 

 const rows = await db.query('SELECT * FROM public.erp_revistas\r\
where rev_status = 1\r\
  order by rev_num_rev desc\r\
');
 
 
 
 return res.json(rows.rows);
  };
