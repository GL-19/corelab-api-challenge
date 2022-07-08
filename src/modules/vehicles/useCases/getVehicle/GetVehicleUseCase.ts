import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class GetVehicleUseCase {
	constructor(
		@inject("InMemoryVehiclesRepository")
		private vehiclesRepository: IVehiclesRepository
	) {}

	async execute(id: number) {
		const vehicle = await this.vehiclesRepository.findById(id);

		if (!vehicle) {
			throw new AppError("Vehicle not found!", 404);
		}

		return vehicle;
	}
}

export { GetVehicleUseCase };
