import { IVehicle } from "../model/IVehicle";
import { ICreateVehicleDTO } from "../useCases/createVehicle/ICreateVehicleDTO";
import { IListVehiclesDTO } from "../useCases/listVehicles/IListVehiclesDTO";
import { IUpdateVehicleDTO } from "../useCases/updateVehicle/IUpdateVehicleDTO";

export interface IVehiclesRepository {
	create: (data: ICreateVehicleDTO) => Promise<IVehicle>;
	findById: (id: number) => Promise<IVehicle>;
	findByPlate: (plate: string) => Promise<IVehicle>;
	list: (filterOptions?: IListVehiclesDTO) => Promise<IVehicle[]>;
	delete: (id: number) => Promise<void>;
	update: (data: IUpdateVehicleDTO) => Promise<IVehicle>;
	updateFavorite: (id: number) => Promise<void>;
}
