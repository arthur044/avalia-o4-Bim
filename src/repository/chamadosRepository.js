import con from "./connection.js";


export async function cadastrarChamado(cadastro) {
    let comando = `INSERT INTO tb_chamado (ds_titulo, ds_impacto, dt_ocorrencia, ds_atribuido, id_login)
  values (?, ?, ?, ?, ?)`;
    let resposta = await con.query(comando, [
        cadastro.titulo,
        cadastro.impacto,
        cadastro.ocorrencia,
        cadastro.atribuido,
        cadastro.login,
    ]);
    let info = resposta[0];
    let idFilme = info.insertId;
    return idFilme;
  }
  
  
export async function buscarChamado(){
    const comando = `
        select * from tb_chamado;`

        let resp = await con.query(comando)
        return resp
}

export async function buscarChamadoPorId(id) {
    const comando =`
        select * from tb_chamado where id_chamado = ? 
    `

    let resp = await con.query(comando,[id])
    return resp[0] 
}