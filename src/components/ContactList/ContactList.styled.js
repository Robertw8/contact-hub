import styled from "@emotion/styled";

const List = styled.ul`
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

export { List, Item };
