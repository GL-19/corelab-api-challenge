import { DataSource } from "typeorm";

export const dataSource = new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "corelab_challenge",
});
