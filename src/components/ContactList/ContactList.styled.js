import styled from "@emotion/styled";
import { HashLoader } from "react-spinners";

const List = styled.ul`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	gap: 40px;
`;

const Item = styled.li`
	margin-top: 20px;
	width: 300px;
	padding: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	box-shadow: 0px 2px 4px 2px #33333333;
`;

const StyledLoader = styled(HashLoader)`
	position: absolute;
	left: 50%;
	transform: translateY(200%) !important;
`;

export { List, Item, StyledLoader };
