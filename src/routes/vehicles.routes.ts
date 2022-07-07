import { Router } from "express";
import { CreateVehicleController } from "../modules/vehicles/useCases/createVehicle/CreateVehicleController";

const vehiclesRouter = Router();
const createdVehicleController = new CreateVehicleController();

vehiclesRouter.post("/", createdVehicleController.handle);

export { vehiclesRouter };
