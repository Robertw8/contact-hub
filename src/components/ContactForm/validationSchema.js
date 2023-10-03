import * as yup from "yup";

export const schema = yup.object().shape({
	name: yup
		.string()
		.required("Name is required")
		.matches(/^[a-zA-Z-' ]+$/, "Invalid name format"),
	phone: yup
		.string()
		.required("Phone number is required")
		.matches(/^[0-9+()-\s]+$/, "Invalid phone number format"),
});
