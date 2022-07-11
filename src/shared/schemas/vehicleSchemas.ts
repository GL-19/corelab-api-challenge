import * as yup from "yup";

export const createVehicleSchema = yup.object().shape({
	body: yup.object({
		name: yup.string().required(),
		brand: yup.string().required(),
		description: yup.string().required(),
		color: yup
			.string()
			.required()
			.matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
		plate: yup
			.string()
			.required()
			.matches(/[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}/),
		year: yup.number().required(),
		price: yup.number().required(),
	}),
});

export const updateVehicleSchema = yup.object().shape({
	body: yup.object({
		name: yup.string().required(),
		brand: yup.string().required(),
		description: yup.string().required(),
		color: yup
			.string()
			.required()
			.matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
		plate: yup
			.string()
			.required()
			.matches(/[a-zA-Z]{3}[0-9][A-Za-z0-9][0-9]{2}/),
		year: yup.number().required(),
		price: yup.number().required(),
	}),
});
