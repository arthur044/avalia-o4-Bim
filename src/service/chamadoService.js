import { cadastrarChamado } from "../repository/loginRepository.js";
import { buscarChamado } from "../repository/chamadosRepository.js";
import { buscarChamadoPorId } from "../repository/chamadosRepository.js";

export default async function inserirChamado(cadastro){
    let chamado = await cadastrarChamado(cadastro)
    return chamado
}

export async function buscarChamadoService(Chamado) {
    
    const registros = await buscarChamado(Chamado)
    return registros
}

export async function buscarChamadoPorIdService(id) {
    if (!id) throw new Error("Parâmetro ID é obrigatorio.");

    const mensagem = await buscarChamadoPorId(id)
    return mensagem;
}