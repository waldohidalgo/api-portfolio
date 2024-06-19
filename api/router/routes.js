import { Router } from "express";

import getAPIProyectos from "../controllers/getProyectos.controllers.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello people");
});

router.get("/api/proyectos", getAPIProyectos);
export default router;
