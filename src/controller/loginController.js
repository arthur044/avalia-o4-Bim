import inserirUsuario, { verificarUsuarioService } from "../service/loginService";
import { Router } from "express";
import { autenticacao, gerarTokenJwt } from "../utils/jwt.js";
import con from "../repository/connection.js";
const endpoint = Router();

endpoint.post("/login", async (req, resp) => {
  try {
    let user = await req.body;
    const usuario = await inserirUsuario(user);

    resp.status(200).send({ usuario: usuario }); 
  } catch (error) {
    logErro(error)
    resp.status(400).send(error);
  }
  
});

endpoint.post("/login/entrar", async (req, resp) => {
    try {
      const usuario = req.body;
  
      const admin = await verificarUsuarioService(usuario);
  
      const token = gerarTokenJwt(admin);
  
      return resp.send({
        token: token,
      });
    } catch (error) {
      return resp.status(400).send({ erro: error.message });
    }
  });

endpoint.get("/login/validar", autenticacao, async (req, resp) => {
  try {
    const {id} = req.user;
    await verificarUsuarioService(id)

    return resp.status(204).send()
  } catch (error) {
    resp.status(400).send({
      error: error.message
    });
    
  }
});


export default endpoint;