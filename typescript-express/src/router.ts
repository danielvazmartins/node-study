import { Express } from 'express'

export default class Router {
    constructor(app: Express) {
        app.get('/', (_, res) => {
            res.send("Hello ts-node!")
        })

        app.get('/express', (_: any, res: any) => {
            res.send("Welcome to Express")
        })
    }
}