import { Router } from "express";
import { getSpeciesData } from "../controllers/index.js";

const serverRouter = Router();

serverRouter.get("/fish/:species", getSpeciesData);

export default serverRouter;
