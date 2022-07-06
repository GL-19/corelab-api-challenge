class AppError {
	constructor(private message: string, private stausCode: number = 400) {}
}

export { AppError };
