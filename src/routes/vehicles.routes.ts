import { Router } from "express";
import { GetVehicleController } from "../modules/vehicles/useCases/getVehicle/GetVehicleController";
import { CreateVehicleController } from "../modules/vehicles/useCases/createVehicle/CreateVehicleController";
import { DeleteVehicleController } from "../modules/vehicles/useCases/deleteVehicle/DeleteVehicleController";

const vehiclesRouter = Router();

const createdVehicleController = new CreateVehicleController();
const getVehicleController = new GetVehicleController();
const deleteVehicleController = new DeleteVehicleController();

vehiclesRouter.post("/", createdVehicleController.handle);

vehiclesRouter.get("/:id", getVehicleController.handle);

vehiclesRouter.delete("/:id", deleteVehicleController.handle);

export { vehiclesRouter };
