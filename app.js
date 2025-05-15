const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors()); // Adiciona o CORS
app.use(express.json());
app.use("/posts", postRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log("db está pronto");
  app.listen(3000, () => {
    console.log("app rodando");
  });
});
