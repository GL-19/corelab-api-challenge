import { IVehicle } from "./IVehicle";
import { v4 as uuidV4 } from "uuid";

class Vehicle implements IVehicle {
	id: string;
	name: string;
	brand: string;
	description: string;
	plate: string;
	isFavorite: boolean;
	year: number;
	color: string;
	price: number;
	createdAt: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
		}
	}
}

export { Vehicle };
