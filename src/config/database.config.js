const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  dialect: process.env.DIALECT, // Qual banco de dados está utilizando;
  host: process.env.HOST, // Qual servidor está utilizando;
  username: process.env.POSTGRES_USER, // Nome do seu usuário no PostgreSQL;
  password: process.env.POSTGRES_PASSWORD, // Senha do seu usuário no PostgreSQL;
  database: process.env.DATABASE, // Nome do seu banco de dados no PostgreSQL;
  port: process.env.DB_PORT || 5432 // Porta do PostgreSQL (padrão 5432 se não especificado)
};