# sequelize-cli
> Utilizando o sequelize e o sequelize-cli para verificar as opções de criar, atualizar e popular o banco de dados

## Criação do projeto

- Criar o projeto do node
```
express --hbs --view hbs sequelize-cli
```
- Executar o docker com o banco de dados
```
docker-compose -f docker-compose.yml up -d
```
- Instalar o sequelize-cli globalmente (se não tiver instalado)
```
npm install sequelize-cli -g
```
- Criar a estrutura inicial do sequelize no projeto
```
sequelize init
```

## Fontes
- http://docs.sequelizejs.com/
- https://github.com/sequelize/cli
- http://mherman.org/blog/2015/10/22/node-postgres-sequelize/