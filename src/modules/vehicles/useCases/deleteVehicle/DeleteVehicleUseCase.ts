import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from "shared/errors/AppError";

@injectable()
class DeleteVehicleUseCase {
	constructor(
		@inject("InMemoryVehiclesRepository")
		private vehiclesRepository: IVehiclesRepository
	) {}

	async execute(id: number): Promise<void> {
		const vehicle = await this.vehiclesRepository.findById(id);

		if (!vehicle) {
			throw new AppError("Vehicle not found!");
		}

		await this.vehiclesRepository.delete(id);
	}
}

export { DeleteVehicleUseCase };
