import { IVehicle } from "../model/IVehicle";
import { Vehicle } from "../model/Vehicle";
import { ICreateVehicleDTO } from "../useCases/createVehicle/ICreateVehicleDTO";
import { IVehiclesRepository } from "./IVehiclesRepository";

class InMemoryVehiclesRepository implements IVehiclesRepository {
	private vehicles: IVehicle[] = [];

	private currentId: number = 1;

	async create(data: ICreateVehicleDTO): Promise<IVehicle> {
		const vehicle = new Vehicle(this.currentId);

		Object.assign(vehicle, {
			...data,
		});

		this.vehicles.push(vehicle);

		this.currentId += 1;

		return vehicle;
	}

	async findByPlate(plate: string): Promise<IVehicle> {
		return this.vehicles.find((vehicle) => vehicle.plate === plate);
	}

	async findById(id: number): Promise<IVehicle> {
		return this.vehicles.find((vehicle) => vehicle.id === id);
	}

	async delete(id: number): Promise<void> {
		this.vehicles.filter((vehicle) => vehicle.id !== id);
	}
}

export { InMemoryVehiclesRepository };
