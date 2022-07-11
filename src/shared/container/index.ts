import { InMemoryVehiclesRepository } from "../../repositories/InMemoryVehiclesRepository";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";
import { container } from "tsyringe";

container.registerSingleton<IVehiclesRepository>(
	"InMemoryVehiclesRepository",
	InMemoryVehiclesRepository
);
