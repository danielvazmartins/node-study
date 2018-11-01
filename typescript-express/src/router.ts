import { Express } from 'express'

export default class Router {
    constructor(app: Express) {
        // Alunos
        const alunos = require('./routes/aluno')
        app.get('/', alunos.getAlunos)
        app.get('/express', alunos.getExpress)
    }
}