import { IVehicle } from "../model/IVehicle";
import { ICreateVehicleDTO } from "../useCases/createVehicle/ICreateVehicleDTO";
import { IListVehiclesDTO } from "../useCases/listVehicles/IListVehiclesDTO";

export interface IVehiclesRepository {
	create: (data: ICreateVehicleDTO) => Promise<IVehicle>;
	findById: (id: number) => Promise<IVehicle>;
	findByPlate: (plate: string) => Promise<IVehicle>;
	list: (filterOptions?: IListVehiclesDTO) => Promise<IVehicle[]>;
	delete: (id: number) => Promise<void>;
	updateFavorite: (id: number) => Promise<void>;
}
