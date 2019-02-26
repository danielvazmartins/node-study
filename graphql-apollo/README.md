# graphql-apollo
Servidor de API GraphQl utilizando apollo-server

## Intalação
npm init
npm install sequelize sequelize-cli sqlite3
.\node_modules\.bin\sequelize init
npm install apollo-server graphql bcryptjs

## Models
node_modules/.bin/sequelize model:create --name User --attributes name:string,email:string,password:string
node_modules/.bin/sequelize model:create --name Recipe --attributes title:string,ingredients:text,direction:text

## Executar
node src/index.js
http://localhost:4000/

```javascript
// Criar um usuário
mutation {
  createUser(
    name: "Daniel",
    email: "daniel@gmail.com",
    password: "123456"
  ) {
    id,
    name
  }
}

// Criar uma receita
mutation {
  createRecipe(
    userId: 1
    title: "Receita 1"
    ingredients: "Salt, Pepper"
    direction: "Add salt, Add pepper"
  ) {
    id
    title
    ingredients
    direction
    user {
      id
      name
      email
    }
  }
}

// Consultar receitas
query {
  allRecipes {
    title,
    ingredients
  }
}
```

## Fontes
https://scotch.io/tutorials/super-simple-graphql-with-node