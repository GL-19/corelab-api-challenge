import { vehiclesRouter } from "src/routes/vehicles.routes";
import { Repository } from "typeorm";

import { dataSource } from "../database/dataSource";
import { IVehicle } from "../entities/IVehicle";
import { Vehicle } from "../entities/Vehicle";
import { ICreateVehicleDTO } from "../useCases/createVehicle/ICreateVehicleDTO";
import { IListVehiclesDTO } from "../useCases/listVehicles/IListVehiclesDTO";
import { IUpdateVehicleDTO } from "../useCases/updateVehicle/IUpdateVehicleDTO";
import { IVehiclesRepository } from "./IVehiclesRepository";

class VehiclesRepository implements IVehiclesRepository {
	private repository: Repository<Vehicle>;

	constructor() {
		this.repository = dataSource.getRepository(Vehicle);
	}

	async create(data: ICreateVehicleDTO): Promise<IVehicle> {
		const vehicle = await this.repository.create(data);

		return this.repository.save(vehicle);
	}

	async findById(id: string): Promise<IVehicle> {
		const vehicle = await this.repository.findOneBy({ id });

		return vehicle;
	}

	async findByPlate(plate: string): Promise<IVehicle> {
		const vehicle = await this.repository.findOneBy({ plate });

		return vehicle;
	}

	async list(filterOptions?: IListVehiclesDTO): Promise<IVehicle[]> {
		throw new Error("Not implemented yet");
	}

	async delete(id: string): Promise<void> {
		await this.repository.delete({ id });
	}

	async update(data: IUpdateVehicleDTO): Promise<IVehicle> {
		const vehicle = await this.repository.update({ ...data }, { id: data.id });

		console.log(vehicle);
	}

	async updateFavorite(id: string): Promise<void> {
		throw new Error("Not implemented yet");
	}
}

export { VehiclesRepository };
