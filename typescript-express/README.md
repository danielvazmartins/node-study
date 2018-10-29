# typescript-express
Utilizando type script com node e express

## Instalação
```bash
# Criar o package.json
npm init
# Instalar o typescript global se já não tiver
npm install -g typescript
# Instalar pacotes necessários
npm install ts-node
npm install typescript
npm install express
npm install @types/express
# Cria o tsconfig.json
tsc --init
# Alterar o tsconfig.json (verificar arquivo deste projeto)
++ "lib": ["dom", "esnext"]
++ "outDir": "dist"
++ "noUnusedLocals": true
++ "noUnusedParameters": true
++ "noImplicitReturns": true
++ "noFallthroughCasesInSwitch": true
# Ajustar o script do package.json
script: {
    "dev": "nodemon --watch 'src/' --exec \"ts-node src/index.ts\" -e ts"
}
# Criar arquivos conforme projeto
src/index.ts
src/app.ts
```

## Fontes
https://medium.com/@oieduardorabelo/node-js-e-typescript-o-como-e-com-testes-7affce2c02a8
https://github.com/TypeStrong/ts-node
https://www.npmjs.com/package/@types/express