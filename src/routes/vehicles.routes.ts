import { Router } from "express";
import { GetVehicleController } from "../modules/vehicles/useCases/getVehicle/GetVehicleController";
import { CreateVehicleController } from "../modules/vehicles/useCases/createVehicle/CreateVehicleController";
import { DeleteVehicleController } from "../modules/vehicles/useCases/deleteVehicle/DeleteVehicleController";
import { ListVehiclesController } from "../modules/vehicles/useCases/listVehicles/ListVehiclesController";
import { UpdateFavoriteController } from "../modules/vehicles/useCases/updateFavorite/UpdateFavoriteController";
import { UpdateVehicleController } from "../modules/vehicles/useCases/updateVehicle/UpdateVehicleController";

const vehiclesRouter = Router();

const createVehicleController = new CreateVehicleController();
const listVehiclesControler = new ListVehiclesController();
const getVehicleController = new GetVehicleController();
const updateVehicleController = new UpdateVehicleController();
const updateFavoriteController = new UpdateFavoriteController();
const deleteVehicleController = new DeleteVehicleController();

vehiclesRouter.post("/", createVehicleController.handle);
vehiclesRouter.get("/", listVehiclesControler.handle);
vehiclesRouter.get("/:id", getVehicleController.handle);
vehiclesRouter.put("/:id", updateVehicleController.handle);
vehiclesRouter.patch("/:id", updateFavoriteController.handle);
vehiclesRouter.delete("/:id", deleteVehicleController.handle);

export { vehiclesRouter };
