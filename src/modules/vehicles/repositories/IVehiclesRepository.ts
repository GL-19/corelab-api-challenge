import { IVehicle } from "../model/IVehicle";

export interface ICreateVehicleDTO {
	name: string;
	description: string;
	plate: string;
	year: number;
	color: string;
	price: number;
}

export interface IVehiclesRepository {
	create: (data: ICreateVehicleDTO) => Promise<IVehicle>;
	findByPlate: (plate: string) => Promise<IVehicle>;
}
