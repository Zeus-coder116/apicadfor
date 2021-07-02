const db251 = require("../config/database251");
const db100110 = require("../config/database3");

exports.createProduct  = async (req, res) => {
 const codigo = req.params.codigo;
 const nome = req.params.nome;
 const seguimento = req.params.seguimento;
 const revistaparalelo = req.params.revistaparalelo;
 const revista = req.params.revista;
 const comissao = req.params.comissao;
 const prinome = req.params.prinome;
 const ativo = req.params.ativo;
 const acrescimo = req.params.acrescimo;
 const seguimentogestao = req.params.seguimentogestao;
 const vinculo = req.params.vinculo;
 const cpfcnpj = req.params.cpfcnpj;
 const grupo = req.params.grupo;
 const codigogrupofvincula = req.params.codigogrupofvincula; 
 const codigogrupoforgrupo = req.params.codigogrupoforgrupo;
 
var anome = "'"+nome.toString()+"'";
var aprinome = "'"+prinome.toString()+"'";
var acpfcnpj = "'"+cpfcnpj.toString()+"'";
var S = "'S'";
console.log(S);



 const rows = await db251.query('INSERT INTO erp_fabricantes(fabricantes_id, fabricantes_nome,fabricantes_nomfant,fabricantes_comissao, fabricantes_segmento_id,fabricantes_segmento_id_gestao,fabricantes_revista,for_ativo,fabricantes_revistas_id,fabricantes_bonus) VALUES ('+codigo+','+anome+','+aprinome+','+comissao+','+seguimento+','+seguimentogestao+','+revistaparalelo+','+ativo+','+revista+','+acrescimo+')');
 const rows2 = await db251.query('INSERT INTO erp_fabricantes_vinculado(fv_vinculacao_id, fv_fabricantes_id,fv_nome,fv_fabricantes_cnpj) VALUES ('+vinculo+','+codigo+','+aprinome+','+acpfcnpj+')');  
 const rows3 = await db251.query('INSERT INTO erp_fabricante_grupo(fg_grupo_id, fg_fabricantes_id) VALUES ('+grupo+','+codigo+')');  
 
 
 const rows4 = await db100110.query('INSERT INTO fabricas(codigofab, codigoalt, nomefabric, desconto, acrescimo, podepedido, podeentrad, podetrfent, podetrfsai, podedevfab, podedevcli, podetroca, mostranome, mensagem, prazotroca) VALUES ('+codigo+','+codigo+','+anome+',0.00, 0.00, '+S+', '+S+', '+S+', '+S+', '+S+', '+S+', '+S+', '+S+', '+S+', 31)');
 
 const rows5 = await db100110.query('INSERT INTO fvincula(codigogrupo, codigofab) VALUES ('+codigogrupofvincula+', '+codigo+')');

 const rows6 = await db100110.query('INSERT INTO forgrupo(codigogrupo, codigofab) VALUES ('+codigogrupoforgrupo+', '+codigo+')');

 
 return res.json(rows.rows);
  };
