import React from "react";
import TextField from "@mui/material/TextField";
import { FilterWrapper } from "./Filter.styled";

import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter } from "../../redux/filter/filterSlice";

export const Filter = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectFilter);

	const handleChange = ({ target }) => {
		const value = target.value;
		dispatch(setFilter(value));
	};

	return (
		<FilterWrapper>
			<TextField
				id='outlined'
				label='Search'
				type='text'
				placeholder='Search contacts...'
				value={filter}
				onChange={handleChange}
			/>
		</FilterWrapper>
	);
};
