import React, { useState } from "react";
import { Form } from "./ContactForm.styled";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useToken } from "../../hooks/useToken";

export const ContactForm = () => {
	const dispatch = useDispatch();

	// const [contactData, setContactData] = useState({ name: "", phone: "" });

	const [errors, setErrors] = useState({});

	const TOKEN = useToken();

	// const [contact] = addContact();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// await schema.validate({ name, phone }, { abortEarly: false });
			// const isDuplicate = contacts.find(
			// 	(contact) => contact.name.toLowerCase() === name.toLowerCase() || contact.phone === phone.toLowerCase(),
			// );
			// if (isDuplicate) {
			// 	Notiflix.Notify.info("This contact already exists");
			// 	return;
			// }
			// setName("");
			// setPhone("");
			// setErrors({});

			const contactData = {
				name: e.target.elements[0].value,
				number: e.target.elements[2].value,
			};

			dispatch(addContact(contactData));
		} catch (error) {
			// const validationErrors = {};
			// error.inner.forEach((e) => {
			// 	validationErrors[e.path] = e.message;
			// });
			// setErrors(validationErrors);
			console.warn(error);
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
					// value={contactData.name}
					// onChange={({ target }) => setContactData({  name: target.value })}
					error={!!errors.name}
					helperText={errors.name}
					autoComplete='new-password'
				/>
				<TextField
					id='outlined'
					label='Phone'
					type='tel'
					name='phone'
					placeholder='Enter phone number...'
					required
					// value={contactData.phone}
					// onChange={({ target }) => setContactData({ ...contactData, phone: target.value })}
					error={!!errors.phone}
					helperText={errors.phone}
					autoComplete='new-password'
				/>

				<Button variant='contained' color='info' type='submit' style={{ width: "40%", alignSelf: "flex-end" }}>
					Add contact
				</Button>
			</Form>
		</>
	);
};
