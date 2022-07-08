import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateFavoriteUseCase } from "./UpdateFavoriteUseCase";

class UpdateFavoriteController {
	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const updateFavoriteUseCase = container.resolve(UpdateFavoriteUseCase);

		await updateFavoriteUseCase.execute(Number(id));

		return response.send();
	}
}

export { UpdateFavoriteController };
