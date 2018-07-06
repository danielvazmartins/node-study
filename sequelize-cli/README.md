# sequelize-cli
> Utilizando o sequelize e o sequelize-cli para verificar as opções de criar, atualizar e popular o banco de dados

## Criação da base do projeto
```bash
# Criar o projeto do node
express --hbs --view hbs sequelize-cli
cd sequelize-cli
npm install
npm install sequelize --save
npm install mysql2 --save
npm install sequelize-cli -g # se já não tiver instalado

# Executar o docker com o banco de dados
docker-compose -f docker-compose.yml up -d

# Criar a estrutura inicial do sequelize no projeto
sequelize init 

# Configurar os dados de acesso ao banco no arquivo
config/config.json
````

## Estrutura do bando de dados (models e migration)
```bash
# Criar os models e arquivos de migrate para cada tabela
sequelize model:generate --name users --attributes use_id:integer,use_email:string,use_name:string,use_password:string
sequelize model:generate --name team --attributes tea_id:integer,tea_name:string

# Sincronizar todos os arquivos de models com o banco de dados (criar tabelas no banco)
sequelize db:migrate

# Desfaz a última migração
sequelize db:migrate:undo

# Desfaz toda a migração (remover tabelas do banco)
sequelize db:migrate:undo:all

# Lista o status de cada migração (up ou down)
sequelize db:migrate:status
```

## Dados do banco (seeders)
```bash
# Criar um arquivo de seeder para alimentar o banco
sequelize seed:generate --name users
sequelize seed:generate --name team

# Popular o banco com os dados com os dados dos seeders
sequelize db:seed:all
```

## Fontes
- http://docs.sequelizejs.com/
- https://github.com/sequelize/cli
- http://mherman.org/blog/2015/10/22/node-postgres-sequelize/