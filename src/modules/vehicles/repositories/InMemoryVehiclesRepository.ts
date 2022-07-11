import { IVehicle } from "../model/IVehicle";
import { Vehicle } from "../model/Vehicle";
import { ICreateVehicleDTO } from "../useCases/createVehicle/ICreateVehicleDTO";
import { IListVehiclesDTO } from "../useCases/listVehicles/IListVehiclesDTO";
import { IUpdateVehicleDTO } from "../useCases/updateVehicle/IUpdateVehicleDTO";
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

	async list({
		searchString = "",
		brand = "",
		color = "",
		year = 0,
		minPrice = 0,
		maxPrice = 0,
	}: IListVehiclesDTO): Promise<IVehicle[]> {
		if (!brand && !color && !year && !maxPrice && !minPrice && !searchString) {
			return this.vehicles;
		}

		searchString = searchString.toLowerCase();

		const vehicles = this.vehicles.filter(
			(vehicle) =>
				(!brand || vehicle.brand === brand) &&
				(!color || vehicle.color === color) &&
				(!year || vehicle.year === year) &&
				(!maxPrice || vehicle.price <= maxPrice) &&
				(!minPrice || vehicle.price >= minPrice) &&
				(!searchString ||
					vehicle.brand.toLowerCase().includes(searchString) ||
					vehicle.color.toLowerCase().includes(searchString) ||
					vehicle.description.toLowerCase().includes(searchString) ||
					vehicle.plate.toLowerCase().includes(searchString) ||
					vehicle.year.toString().includes(searchString) ||
					vehicle.price.toString().includes(searchString))
		);

		return vehicles;
	}

	async findByPlate(plate: string): Promise<IVehicle> {
		return this.vehicles.find((vehicle) => vehicle.plate === plate);
	}

	async findById(id: number): Promise<IVehicle> {
		return this.vehicles.find((vehicle) => vehicle.id === id);
	}

	async delete(id: number): Promise<void> {
		this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== id);
	}

	async update(data: IUpdateVehicleDTO): Promise<IVehicle> {
		const vehicle = this.vehicles.find((vehicle) => vehicle.id === data.id);

		Object.assign(vehicle, { ...data });

		return vehicle;
	}

	async updateFavorite(id: number): Promise<void> {
		const vehicle = this.vehicles.find((vehicle) => vehicle.id === id);

		vehicle.isFavorite = !vehicle.isFavorite;
	}
}

export { InMemoryVehiclesRepository };
