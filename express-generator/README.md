# Criando um projeto novo com o Express Generator

# Caso não tenha ainda, instale o express-generator de forma global
npm install express-generator -g

# Visualiazar opcoes de configuração
express -h

# Criar estrutura básica padrão
express [pasta-projeto]

# Criar estutura do projeto utilizando o handlebars
express --hbs --view hbs [pasta-projeto]

# Adicionar o nome do projeto se quiser criar o diretorio
express myapp

# Instalar as dependencias
npm install

# Iniciar o projeto
node ./bin/www

# Fontes
http://expressjs.com/pt-br/starter/generator.html