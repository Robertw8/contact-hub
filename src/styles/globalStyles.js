import { css } from "@emotion/react";
import Roboto from "../assets/fonts/Roboto-Regular.ttf";

export const globalStyles = css`
	@font-face {
		font-family: "Roboto";
		src: url(${Roboto}) format("truetype");
	}

	body {
		min-height: 100vh;
		font-family: "Roboto", sans-serif;
		background-color: #fdfdfd;
		color: #333333;
		margin: 0;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin: 0;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
	}

	address {
		font-style: normal;
	}

	.container {
		max-width: 1180px;
		margin: 200px auto;
	}
`;
