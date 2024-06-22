const dotenv = require('dotenv') // Es el archivo .env

dotenv.config()
// Esta configuración es para crear la base de datos semana10

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": 'postgres',
  },
}
