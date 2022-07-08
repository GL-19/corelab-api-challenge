import { IVehiclesRepository } from "../../repositories/IVehiclesRepository";
import { inject, injectable } from "tsyringe";
import { IVehicle } from "../../model/IVehicle";
import { IListVehiclesDTO } from "./IListVehiclesDTO";

@injectable()
class ListVehiclesUseCase {
	constructor(
		@inject("InMemoryVehiclesRepository")
		private vehiclesRepository: IVehiclesRepository
	) {}

	async execute(filterOptions: IListVehiclesDTO): Promise<IVehicle[]> {
		const vehicles = await this.vehiclesRepository.list(filterOptions);

		return vehicles;
	}
}

export { ListVehiclesUseCase };
