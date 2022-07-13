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
		const vehicles = await this.repository.find();

		return vehicles;
	}

	async delete(id: string): Promise<void> {
		await this.repository.delete({ id });
	}

	async update(data: IUpdateVehicleDTO): Promise<IVehicle> {
		await this.repository.update({ id: data.id }, { ...data });

		const vehicle = await this.repository.findOneBy({ id: data.id });

		return vehicle;
	}

	async updateFavorite(id: string): Promise<void> {
		const vehicle = await this.repository.findOneBy({ id });

		await this.repository.update(id, { isFavorite: !vehicle.isFavorite });
	}
}

export { VehiclesRepository };
