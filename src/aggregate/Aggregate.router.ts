import express from "express";
import AggregateController from "./Aggregate.controller";
import AggregateService from "./Aggregate.service";

import ClasseService from "../documentServices/Classes.service";
import ProfesseurService from "../documentServices/Professeur.service";

const service = new AggregateService(new ClasseService(), new ProfesseurService());
const controller = new AggregateController(service);

const router = express.Router();

router.get("/", controller.getAllClasses);
router.get("/professeurs/:id", controller.getProfesseurAvecClassList);

export default router;
