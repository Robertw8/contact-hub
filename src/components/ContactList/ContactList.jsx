import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, Item } from "./ContactList.styled";
import { nanoid } from "nanoid";

export class ContactList extends Component {
	componentDidUpdate(prevProps, prevState) {
		localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
	}

	render() {
		const { contacts, onDelete } = this.props;

		return (
			<List>
				{contacts.map((item) => (
					<Item key={nanoid()}>
						{item.name} ({item.number})
						<IconButton aria-label='delete' size='medium' onClick={() => onDelete(item.id)}>
							<DeleteIcon color='warning' />
						</IconButton>
					</Item>
				))}
			</List>
		);
	}
}
