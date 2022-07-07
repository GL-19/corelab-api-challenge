import { inject, injectable } from "tsyringe";

import { IVehicle } from "../../model/IVehicle";
import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateVehicleDTO } from "./ICreateVehicleDTO";

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
