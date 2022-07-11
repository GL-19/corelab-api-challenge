import { Router } from "express";
import { GetVehicleController } from "../useCases/getVehicle/GetVehicleController";
import { CreateVehicleController } from "../useCases/createVehicle/CreateVehicleController";
import { DeleteVehicleController } from "../useCases/deleteVehicle/DeleteVehicleController";
import { ListVehiclesController } from "../useCases/listVehicles/ListVehiclesController";
import { UpdateFavoriteController } from "../useCases/updateFavorite/UpdateFavoriteController";
import { UpdateVehicleController } from "../useCases/updateVehicle/UpdateVehicleController";

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
