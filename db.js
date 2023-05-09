// Cargamos variables de entorno
require("dotenv").config();
const DB_CONNECTION = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const mongoose = require("mongoose");

// Configuración de la conexión
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  dbName: DB_NAME,
};

const connect = async () => {
  try {
    // try following connection
    const database = await mongoose.connect(DB_CONNECTION, config);
    const name = database.connection.name;
    const host = database.connection.host;
    console.log(`Conectado a la base de datos ${name} en el host ${host}`);
    return database;
  } catch (error) {
    console.error(error);
    console.log("Connection error - rety in 5s..."); // error message.
    setTimeout(connect, 5000); // reconnect in 5 seconds function.
  }
};

module.exports = { connect };
