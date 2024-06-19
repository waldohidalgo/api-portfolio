import express from "express";
import cors from "cors";
import router from "./router/routes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`El servidor está inicializado en el puerto ${PORT}`);
});

export default app;
