require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    URL: process.env.URL,
    JWT_SECRET: process.env.JWT_SECRET
}

//Pode usar o comando node index.js para logar o PORT: '5000'
