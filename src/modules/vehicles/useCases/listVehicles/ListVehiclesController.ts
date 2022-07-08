import { Request, Response } from "express";
import { container } from "tsyringe";
import { IListVehiclesDTO } from "./IListVehiclesDTO";
import { ListVehiclesUseCase } from "./ListVehiclesUseCase";

class ListVehiclesController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { brand, color, year, maxPrice, minPrice } = request.query;

		const filterOptions: IListVehiclesDTO = {
			brand: brand ? (brand as string) : "",
			color: color ? (color as string) : "",
			year: year ? Number(year) : 0,
			minPrice: minPrice ? Number(minPrice) : 0,
			maxPrice: maxPrice ? Number(maxPrice) : 0,
		};

		const listVehiclesUseCase = container.resolve(ListVehiclesUseCase);

		const vehicles = await listVehiclesUseCase.execute(filterOptions);

		return response.json(vehicles);
	}
}

export { ListVehiclesController };
