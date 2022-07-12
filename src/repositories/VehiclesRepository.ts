import { IVehicle } from "../models/IVehicle";
import { Vehicle } from "../models/Vehicle";
import { Repository } from "typeorm";
import { ICreateVehicleDTO } from "../useCases/createVehicle/ICreateVehicleDTO";
import { IListVehiclesDTO } from "../useCases/listVehicles/IListVehiclesDTO";
import { IUpdateVehicleDTO } from "../useCases/updateVehicle/IUpdateVehicleDTO";
import { IVehiclesRepository } from "./IVehiclesRepository";
import { dataSource } from "../shared/typeorm/dataSource";

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
		throw new Error("Not implemented yet");
	}

	async list(filterOptions?: IListVehiclesDTO): Promise<IVehicle[]> {
		throw new Error("Not implemented yet");
	}

	async delete(id: string): Promise<void> {
		throw new Error("Not implemented yet");
	}

	async update(data: IUpdateVehicleDTO): Promise<IVehicle> {
		throw new Error("Not implemented yet");
	}

	async updateFavorite(id: string): Promise<void> {
		throw new Error("Not implemented yet");
	}
}

export { VehiclesRepository };
