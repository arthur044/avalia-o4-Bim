export function validarCadastroAutonomo(autonomo) {
    if (!autonomo.usuario) {
      throw new Error("nome do usuario é obrigatório!");
    }
    if (!autonomo.senha) {
      throw new Error("Senha é obrigatória");
    }
  }

  export function validarEntrada(autonomo) {
    if (!autonomo.usuario) {
      throw new Error("nome do usuario é obrigatório!");
    }
    if (!autonomo.senha) {
      throw new Error("Senha é obrigatória");
    }
  }