const server = require('./src/app.js');
require('dotenv').config()
// const { mongconection } = require('./src/db.js');
const {MongoClient} = require("mongodb")

const {DB_USER, DB_PASSWORD, DB_CLUSTER} = process.env;

//conection database
const mongoose = require('mongoose');

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.dm2ieov.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=> console.log ('Database Conect'))
    .catch(e=> console.log(e))

    const PORT = process.env.PORT || 3001
    server.listen(PORT, () => {
      console.log('Servidor iniciado en puerto ' + PORT);
    });
