# test-istanbul
Ferramenta para gerar relatório de cobertura dos testes unitários

## Como usar
```bash
nyc --reporter=html --reporter=text mocha
# --reporter=html -> Gera relatório em HTML na pasta coverage
# --reporter=text -> Gera relatório no console (padrão se não especificar)
# --reporter=lcov -> Formato de relatório utilizado pelo Jenkins
```

## Fontes
https://istanbul.js.org/
https://github.com/istanbuljs/nyc