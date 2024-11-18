import { Router } from "express";
import { cadastrarChamado } from "../repository/chamadosRepository.js";
import { buscarChamado } from "../repository/chamadosRepository.js";
import { buscarChamadoPorId } from "../repository/chamadosRepository.js";
const endpoint = Router();

endpoint.post("/cadastrar", async (req, resp) => {
  try {
    let cadastroObj = await req.body;
    const cadastro = await cadastrarChamado(cadastroObj);

    resp.status(200).send({ cadastro: cadastro }); 
  } catch (error) {
    logErro(error)
    resp.status(400).send(error);
  }
  
});

endpoint.get("/cadastrar/:id", async (req, resp) => {
  try {
    const cadastroId = req.params.id;
    const id = await buscarChamadoPorId(cadastroId);
    resp.status(200).send(id);
  } catch (error) {
    resp.status(400).send({
      error: error.message
    });
    
  }
});


endpoint.get('/cadastrar', async (req, resp) => {
    try {
        const cadastro = buscarChamado()
        resp.send({
            cadastro: cadastro
        })
    }
    catch (error) {
        
    }
})

export default endpoint; 