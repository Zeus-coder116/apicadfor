const db = require("../config/database2");

const md5 = require('md5');

exports.listAllProducts  = async (req, res) => {

    

    const usu_login = req.params.usu_login;
    const usu_senha = req.params.usu_senha;


    var asusu_login = "'"+usu_login.toString()+"'";
    var asusu_senha = "'"+md5(usu_senha).toString()+"'";
    var aausu_login = asusu_login.toUpperCase() 
 
    
    

    console.log(asusu_login,asusu_senha)
 

    const rows = await db.query('SELECT * FROM public.erp_usuario where usu_login= '+aausu_login+' and usu_senha = '+asusu_senha+'')
     
               
    
   
 
             return res.json(rows.rows);
  };

 


  


  


 

