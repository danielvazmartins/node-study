import { Response, Request, Handler } from 'express';

exports.getAlunos = (_req: Request, res: Response, _next: Handler) => {
    res.json({alunos: true})
}

exports.getExpress = (_req: Request, res: Response, _next: Handler) => {
    res.json({alunos: "express"})
}