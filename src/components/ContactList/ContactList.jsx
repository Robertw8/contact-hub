import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { List, Item } from "./ContactList.styled";

export const ContactList = ({ contacts, onDelete }) => {
	return (
		<List>
			{contacts.map((item) => (
				<Item key={item.id}>
					{item.name} ({item.number})
					<IconButton aria-label='delete' size='medium' onClick={() => onDelete(item.id)}>
						<DeleteIcon color='warning' />
					</IconButton>
				</Item>
			))}
		</List>
	);
};
