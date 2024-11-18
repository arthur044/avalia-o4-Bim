import express from "express"

const app = express();
app.use(express.json());

import cadastroController from './controller/cadastrarController.js';
import userController from './controller/loginController.js';

export default function adicionarRotas(servidor){
    servidor.use(cadastroController);
    servidor.use(userController);
} 