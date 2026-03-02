INICIAR O PROJETO
npm init
npm i express nodemon dotenv sequelize sequelize-cli mysql2 cors basic-ftp

RODAR PROJETO
INSERIR NO SCRIPT DO PACKAGE -> "start": "nodemon index.js"
npm run start

CRIAR ARQUIVO .gitignore E INSERIR
node_modules
.env

CRIAR ARQUIVOS
.env
.env.example

NO INDEX ADICIONAR
const dotenv = require("dontenv");
dotenv.config();
process.env.VARIAVEL_NO_ENV

SEQUELIZE-CLI comandos
npx sequelize-cli init
MODEL -> npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
MIGRATION -> npx sequelize-cli db:migrate
UNDO MIGRATION -> npx sequelize-cli db:migrate:undo | npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
SEED -> npx sequelize-cli seed:generate --name demo-user
RUNNING SEED -> npx sequelize-cli db:seed:all
UNDO SEED ->
recent seed:

npx sequelize-cli db:seed:undo

specific seed:

npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data

undo all seeds:

npx sequelize-cli db:seed:undo:all
