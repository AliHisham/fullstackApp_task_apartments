import { Router } from "express";

import {
  getAllApartmentsHandler,
  getApartmentByIdHandler,
  addNewApartmentHandler,
} from "../controllers/apartmentController";

const apartmentRouter = Router();
apartmentRouter.get("/", getAllApartmentsHandler);
apartmentRouter.get("/:id", getApartmentByIdHandler);
apartmentRouter.post("/", addNewApartmentHandler);

export default apartmentRouter;
