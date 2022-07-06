import express, { Request, Response } from "express";
import { vehiclesRouter } from "./routes/vehicles.routes";

const app = express();

app.use(express.json());

app.use("/vehicles", vehiclesRouter);

app.get("/", (request: Request, response: Response) => {
	return response.json("Hello");
});

export { app };
