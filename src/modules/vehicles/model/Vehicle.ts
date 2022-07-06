import { IVehicle } from "./IVehicle";

class Vehicle implements IVehicle {
	id: number;
	name: string;
	description: string;
	plate: string;
	isFavorite: boolean;
	year: number;
	color: string;
	price: number;
	createdAt: Date;

	constructor(id: number) {
		this.id = id;
		this.isFavorite = false;
		this.createdAt = new Date();
	}
}

export { Vehicle };
