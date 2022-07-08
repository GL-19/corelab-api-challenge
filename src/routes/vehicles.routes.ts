import { Router } from "express";
import { GetVehicleController } from "../modules/vehicles/useCases/getVehicle/GetVehicleController";
import { CreateVehicleController } from "../modules/vehicles/useCases/createVehicle/CreateVehicleController";
import { DeleteVehicleController } from "../modules/vehicles/useCases/deleteVehicle/DeleteVehicleController";
import { ListVehiclesController } from "../modules/vehicles/useCases/listVehicles/ListVehiclesController";
import { UpdateFavoriteController } from "../modules/vehicles/useCases/updateFavorite/UpdateFavoriteController";

const vehiclesRouter = Router();

const createVehicleController = new CreateVehicleController();
const listVehiclesControler = new ListVehiclesController();
const getVehicleController = new GetVehicleController();
const updateFavoriteController = new UpdateFavoriteController();
const deleteVehicleController = new DeleteVehicleController();

vehiclesRouter.post("/", createVehicleController.handle);
vehiclesRouter.get("/", listVehiclesControler.handle);
vehiclesRouter.get("/:id", getVehicleController.handle);
vehiclesRouter.patch("/:id", updateFavoriteController.handle);
vehiclesRouter.delete("/:id", deleteVehicleController.handle);

export { vehiclesRouter };
