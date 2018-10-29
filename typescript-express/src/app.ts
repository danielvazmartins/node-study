import express from "express";
import Router from './router'

const app = express();

// Inicializa as rotas
new Router(app)


export default app;