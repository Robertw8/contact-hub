import React, { useState } from "react";
import { Form } from "./ContactForm.styled";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsSlice";
import { schema } from "./validationSchema";
import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/contactsSlice";
import Notiflix from "notiflix";

export const ContactForm = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [errors, setErrors] = useState({});
	const dispatch = useDispatch();
	const persistContacts = Object.values(useSelector(getContacts));
	const contacts = persistContacts.slice(0, persistContacts.length - 1);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await schema.validate({ name, phone }, { abortEarly: false });

			const isDuplicate = contacts.find(
				(contact) => contact.name.toLowerCase() === name.toLowerCase() || contact.phone === phone.toLowerCase(),
			);

			if (isDuplicate) {
				Notiflix.Notify.info("This contact already exists");
				return;
			}

			dispatch(addContact(name, phone));

			setName("");
			setPhone("");
			setErrors({});
		} catch (error) {
			const validationErrors = {};
			error.inner.forEach((e) => {
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
					onChange={({ target }) => setName(target.value)}
					error={!!errors.name}
					helperText={errors.name}
				/>
				<TextField
					id='outlined'
					label='Phone'
					type='tel'
					name='phone'
					placeholder='Enter phone number...'
					required
					value={phone}
					onChange={({ target }) => setPhone(target.value)}
					error={!!errors.phone}
					helperText={errors.phone}
				/>

				<Button variant='contained' color='info' type='submit' style={{ width: "40%", alignSelf: "flex-end" }}>
					Add contact
				</Button>
			</Form>
		</>
	);
};
