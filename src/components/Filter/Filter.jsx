import React from "react";
import TextField from "@mui/material/TextField";
import { FilterWrapper } from "./Filter.styled";

export const Filter = ({ filter, onChange }) => {
	return (
		<FilterWrapper>
			<TextField
				id='outlined'
				label='Search'
				type='text'
				placeholder='Search contacts...'
				value={filter}
				onChange={onChange}
			/>
		</FilterWrapper>
	);
};
