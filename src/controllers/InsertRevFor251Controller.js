const db251 = require("../config/database251");
const db10070 = require("../config/database10070");
const db = require("../config/database2");

exports.createProduct  = async (req, res) => {
 const revistas_id = req.params.revistas_id;
 const revistas_nome = req.params.revistas_nome;
 const revistas_lancamento = req.params.revistas_lancamento;
 const revistas_ivendas = req.params.revistas_ivendas;
 const revistas_prelanc = req.params.revistas_prelanc;

 var revistas_nomea = "'"+revistas_nome.toString()+"'";
 var revistas_lancamentoa = "'"+revistas_lancamento.toString()+"'";
 var revistas_ivendasa = "'"+revistas_ivendas.toString()+"'";
 var revistas_prelanca = "'"+revistas_prelanc.toString()+"'";
    
console.log(revistas_id, revistas_nomea, revistas_lancamento, revistas_ivendas, revistas_prelanc)
 const rows = await db251.query('INSERT INTO erp_revistas(revistas_id, revistas_nome, revistas_lancamento, revistas_ivendas, revistas_prelanc) VALUES ('+revistas_id+','+revistas_nomea+','+revistas_lancamentoa+','+revistas_ivendasa+', '+revistas_prelanca+')'); 
 const rows2 = await db10070.query('INSERT INTO scl_cad_revistas(revistas_id, revistas_nome, revistas_lancamento, revistas_ivendas, revistas_prelanc) VALUES ('+revistas_id+','+revistas_nomea+','+revistas_lancamentoa+','+revistas_ivendasa+', '+revistas_prelanca+')'); 
 const rows3 = await db.query('INSERT INTO public.erp_revistas(rev_num_rev, rev_nom, rev_lan, rev_iven, rev_prelan) VALUES ('+revistas_id+','+revistas_nomea+','+revistas_lancamentoa+','+revistas_ivendasa+', '+revistas_prelanca+')'); 
 
 
 
 
 
 
 
 return res.json(rows.rows);
  };
