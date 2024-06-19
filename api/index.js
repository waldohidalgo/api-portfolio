import express from "express";
import cors from "cors";
import router from "./router/routes.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

var whitelist = ["https://waldohidalgo.vercel.app/", "http://localhost:3000/"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`El servidor está inicializado en el puerto ${PORT}`);
});

export default app;
