import con from "./connection.js";



export async function cadastrarUsuario(cadastro) {
    let comando = `INSERT INTO tb_chamado (nm_usuario, ds_senha)
  values (?, ?)`;
    let resposta = await con.query(comando, [
        cadastro.login,
        cadastro.senha,
    ]);
    let info = resposta[0];
    let idFilme = info.insertId;
    return idFilme;
  }

export async function validarUsuario(user){
    const comando = `
    select 
        id_login id,
        nm_usuario nome
    from tb_login
    where nm_usuario = ? and ds_senha ?
    `
    let registro = await con.query(comando, [user.nome, user.senha])
    return registro[0][0]
}

export async function verificarUsuario(id) {
    const comando = `SELECT id_login FROM tb_login
                            WHERE id_login = ?`;
  
    const resposta = await con.query(comando, [id]);
    return resposta[0][0];
  }