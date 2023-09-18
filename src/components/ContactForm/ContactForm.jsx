import React, { useState } from "react";
import { nanoid } from "nanoid";
import * as yup from "yup";
import { Form } from "./ContactForm.styled";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const schema = yup.object().shape({
	name: yup
		.string()
		.required("Name is required")
		.matches(/^[a-zA-Z-' ]+$/, "Invalid name format"),
	number: yup
		.string()
		.required("Phone number is required")
		.matches(/^[0-9+()-\s]+$/, "Invalid phone number format"),
});

export const ContactForm = ({ onSubmit }) => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await schema.validate({ name, number }, { abortEarly: false });

			const newContact = {
				id: nanoid(),
				name,
				number,
			};

			onSubmit(newContact);

			setName("");
			setNumber("");
			setErrors({});
		} catch (err) {
			const validationErrors = {};
			err.inner.forEach((e) => {
				validationErrors[e.path] = e.message;
			});
			setErrors(validationErrors);
		}
	};

	return (
		<>
			<Form name='contact' onSubmit={handleSubmit}>
				<TextField
					id='outlined'
					label='Name'
					type='text'
					name='name'
					placeholder='Enter name...'
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					error={!!errors.name}
					helperText={errors.name}
				/>
				<TextField
					id='outlined'
					label='Phone'
					type='tel'
					name='number'
					placeholder='Enter phone number...'
					required
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					error={!!errors.number}
					helperText={errors.number}
				/>
				<Button variant='contained' color='info' type='submit' style={{ width: "40%", alignSelf: "flex-end" }}>
					Add contact
				</Button>
			</Form>
		</>
	);
};
