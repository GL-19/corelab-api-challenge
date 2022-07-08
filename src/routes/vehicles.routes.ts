import { Router } from "express";
import { GetVehicleController } from "../modules/vehicles/useCases/getVehicle/GetVehicleController";
import { CreateVehicleController } from "../modules/vehicles/useCases/createVehicle/CreateVehicleController";

const vehiclesRouter = Router();

const createdVehicleController = new CreateVehicleController();
const getVehicleController = new GetVehicleController();

vehiclesRouter.get("/:id", getVehicleController.handle);
vehiclesRouter.post("/", createdVehicleController.handle);

export { vehiclesRouter };
