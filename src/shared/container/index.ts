import { InMemoryVehiclesRepository } from "../../modules/vehicles/repositories/InMemoryVehiclesRepository";
import { IVehiclesRepository } from "../../modules/vehicles/repositories/IVehiclesRepository";
import { container } from "tsyringe";

container.registerSingleton<IVehiclesRepository>(
	"InMemoryVehiclesRepository",
	InMemoryVehiclesRepository
);
