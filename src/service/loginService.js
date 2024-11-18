import { cadastrarUsuario } from "../repository/loginRepository.js";
import { validarEntrada } from "../validation/loginValidation.js";
import { verificarUsuario } from "../repository/loginRepository.js";

export default async function inserirUsuario(usuario){
    let user = await cadastrarUsuario(usuario)
    return user
}

export async function validarUsuarioService(usuario) {
    validarEntrada(usuario);
  
    const registros = await validarEntrada(usuario);
  
    if (!registros) throw new Error("Email ou senha inválidos !");
  
    return registros;
  }

  
  export async function verificarUsuarioService(id) {
    if (!id) throw new Error("Id inválido !");
  
    const usuario = await verificarUsuario(id);
  
    if (!usuario) throw new Error("Usuário inválido !");
  
    return usuario;
  }