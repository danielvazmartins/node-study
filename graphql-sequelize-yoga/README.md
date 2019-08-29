# graphql-sql-yoga
Framework Express acessando o banco com Sequelize e usando o GraphQl com o graphql-yoga

## Executar
npm start
http://localhost:4000/

## Utilização

```javascript
// Inicializar o banco de dados
mutation {
  adminInitDb
}

// Adicionar um alimento
mutation {
  addFood(
    name: "Batata",
    ptn: 0.01,
    cho: 0.7,
    lip: 0
  ) {
    name
  }
}

// Consultar os alimentos
query {
  getFoods {
    name
  }
}

// Adiciona uma refeição
mutation {
  addMeal(
    name: "Almoço"
  ) {
    name
  }
}

// Consulta as refeições
query {
  getMeals {
    name
  }
}

// Adicionar um alimento na refeição
mutation {
  addFoodToMeal(
    MealId: 1,
    FoodId: 1,
    qtd: 1
  )
}

// Consultandos as refeições e os alimentos de cada uma
query {
  getMeals {
    name,
    Foods {
      name
    }
  }
}
```

## Fontes
https://graphql.org/learn/