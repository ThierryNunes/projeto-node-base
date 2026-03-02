const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Configuração do CORS usando o pacote (mais seguro e limpo)
app.use(
  cors({
    origin: "*", // Em produção, mude para o seu domínio
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Accept", "X-PINGOTHER", "Content-Type", "Authorization"],
    credentials: true,
  }),
);

// routes
routes(app);

module.exports = app;
