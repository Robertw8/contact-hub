import React, { Component } from "react";
import { nanoid } from "nanoid";

import { Form } from "./ContactForm.styled";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			number: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { name, number } = this.state;

		if (name.trim() === "" || number.trim() === "") {
			return;
		}

		const newContact = {
			id: nanoid(),
			name,
			number,
		};

		this.props.onSubmit(newContact);
		this.setState({
			name: "",
			number: "",
		});
	};

	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		return (
			<>
				<Form name='contact' onSubmit={this.handleSubmit}>
					<TextField
						id='outlined'
						label='Name'
						type='text'
						name='name'
						value={this.state.name}
						onChange={this.handleInputChange}
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						placeholder='Enter name...'
						required
					/>
					<TextField
						id='outlined'
						label='Phone'
						type='tel'
						name='number'
						value={this.state.number}
						onChange={this.handleInputChange}
						title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
						placeholder='Enter phone number...'
						required
					/>
					<Button variant='contained' color='info' type='submit' style={{ width: "40%", alignSelf: "flex-end" }}>
						Add contact
					</Button>
				</Form>
			</>
		);
	}
}
