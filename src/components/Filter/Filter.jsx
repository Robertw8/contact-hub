import React from "react";
import TextField from "@mui/material/TextField";
import { FilterWrapper } from "./Filter.styled";

import { useDispatch, useSelector } from "react-redux";
import { getFilter, setFilter } from "../../redux/filter/filterSlice";

export const Filter = () => {
	const dispatch = useDispatch();
	const persistFilter = Object.values(useSelector(getFilter));
	const filter = persistFilter.slice(0, persistFilter.length - 1).join("");

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
