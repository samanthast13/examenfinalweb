// crea el servidor
import express from "express";
import cors from "cors";
import { loginVisitor } from "./handler/visitorHandler";

const app = express();
app.use(cors());
app.use(express.json());

// ndpoint
app.post("/api/login", loginVisitor);

// inicia server
app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});
