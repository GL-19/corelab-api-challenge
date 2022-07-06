import { IVehicle } from "modules/vehicles/model/IVehicle";
import {
	ICreateVehicleDTO,
	IVehiclesRepository,
} from "modules/vehicles/repositories/IVehiclesRepository";
import { AppError } from "shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateVehicleUseCase {
	constructor(
		@inject("InMemoryVehiclesRepository")
		private vehiclesRepository: IVehiclesRepository
	) {}

	async execute(data: ICreateVehicleDTO): Promise<IVehicle> {
		const vehicle = await this.vehiclesRepository.findByPlate(data.plate);

		if (vehicle) {
			throw new AppError("Vehicle already exists");
		}

		const createdVehicle = await this.vehiclesRepository.create(data);

		return createdVehicle;
	}
}

export { CreateVehicleUseCase };
