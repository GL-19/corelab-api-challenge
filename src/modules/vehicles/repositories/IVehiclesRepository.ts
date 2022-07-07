import { IVehicle } from "../model/IVehicle";
import { ICreateVehicleDTO } from "../useCases/createVehicle/ICreateVehicleDTO";

export interface IVehiclesRepository {
	create: (data: ICreateVehicleDTO) => Promise<IVehicle>;
	findByPlate: (plate: string) => Promise<IVehicle>;
}
