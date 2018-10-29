# sqlite-sequelize
> Utilizando o ORM (Object Relational Mapper) Sequelize para realizar operações no banco de dados sqlite

## Criação da base do projeto
```bash
# Criar o projeto do node
express --view=hbs sqlite-sequelize
cd sqlite-sequelize
npm install
npm install sequelize
npm install sqlite3
npm install sequelize-cli -g # se já não tiver instalado

# Criar a estrutura inicial do sequelize no projeto
sequelize init 

# Configurar os dados de acesso ao banco no arquivo
config/config.json
````