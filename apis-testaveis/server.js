import express from 'express';

const app = express()
app.use(express.json({}))

app.use((req, res, next) => {
    console.log('middleware')
    next()
})

app.get('/error', (req, res, next) => {
    next(new Error('Erro forcado'))
})

app.get('/', (req, res) => {
    console.log('Hello World')
    res.send('Hello World')
})

app.use((error, req, res, next) => {
    console.log(error.message)
    res.status(500).send('Ocorreu um erro')
})

app.listen(3000, () => { console.log('The server express is listening')})