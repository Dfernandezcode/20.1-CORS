const express = require("express");
const { bookRouter } = require("./routes/book.routes.js");
const { authorRouter } = require("./routes/author.routes.js");
const { connect } = require("./db.js");
const cors = require("cors"); // add this after running npm i cors

const main = async () => {
  // Conexión a la BBDD
  const database = await connect();

  // Configuración del server
  const PORT = 3000;
  const server = express();
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  // CORS npm allows use of CORS without needing to write code in routes to permit it.
  server.use(cors()); // add this after const cors imported.

  // Rutas
  const router = express.Router();
  router.get("/", (req, res) => {
    res.send(`Esta es la home de nuestra API. Conectados a la BBDD ${database.connection.name}`);
  });
  router.get("*", (req, res) => {
    res.status(404).send("Lo sentimos :( No hemos encontrado la página solicitada.");
  });

  // Usamos las rutas
  server.use("/book", bookRouter);
  server.use("/author", authorRouter);
  server.use("/", router);

  server.listen(PORT, () => {
    console.log(`Server levantado en el puerto ${PORT}`);
  });
};

main();
