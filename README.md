# node-study
Repositório com exemplos e testes práticos
Quando baixar um projeto novo, precisa entrar na pasto do projeto e rodar o "npm install"
Iniciar qualquer projeto com "nodemon ./nome-do-projeto/bin/www"
Todos projetos estão rodando na porta 3000

## Executar
 ```bash
cd PROJETO
npm install
# Abrir projeto passando uma porta no windows (tem que ser no prompt, nao funciona no terminal do VsCode)
set PORT=3001& nodemon ./bin/www
```

## Projetos

### express-hello-world
Aplicação básica, incluindo o express

### express-generator
Utilizando o express genertor para criar uma estrutura básica para iniciar um projeto com o express

### passportjs
Processo de autenticação utilizando a biblioteca passportjs

### request-viacep
Componente utilizado para fazer requisições HTTP de maneira simples

#### mysql-native
Utilização do client do mysql nativo para realizar operações no banco de dados

### mysql-sequelize
Utilizando o ORM (Object Relational Mapper) Sequelize para realizar operações no banco de dados

### bcrypt (incompleto)
Utilizar biblioteca do node para gerar hash, similar ao password do mysql

### sequelize-cli
Utilizando o sequelize e o sequelize-cli para verificar as opções de criar, atualizar e popular o banco de dados

### cron-task
Utilizando o módulo node-cron para fazer o agendamento de tarefas no NodeJs

### nest-framework
Framework em NojeJs para criação de APIs utilizando TypeScript

### email-nodemailer
Componente utilizado para fazer o envio de e-mails

### puppetter
Biblioteca do Google para controle do navegador através de API. Útil para automatizar alguma tareda, testes integradados, prints de telas

### bot-telegram
Bot para Telegram

### sqlite
Utilizando o modulo node-sqlite3 para trabalhar com o banco de dados sqlite

### typescript-express
Utilizando type script com node e express

### sqlite-sequelize
Utilizando o ORM (Object Relational Mapper) Sequelize para realizar operações no banco de dados sqlite

### test-nock
Modulo de teste (nock) para fazer o mock de requisições externas

### test-superagent-mock
Modulo de teste (speragent-mock) para fazer o mock de requisições externas

### test-mocha
Framework de testes unitários

### test-jasmine
Framework de testes unitários

### test-istanbul
Ferramenta para gerar relatório de cobertura dos testes unitários

### jwt-auth
Autenticação utilizando JWT (Json Web Token)

## Projetos para verificar
- http native - https://nodejs.org/api/http.html
- Express routing - https://expressjs.com/en/guide/routing.html
- Multer - (Upload de imagens) https://www.npmjs.com/package/multer
- Faker.js - https://github.com/marak/faker.js/
- Elasticsearch - https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/about.html
- Istanbul - https://istanbul.js.org/