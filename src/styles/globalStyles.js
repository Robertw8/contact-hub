import { css } from "@emotion/react";

export const globalStyles = css`
	@font-face {
		font-family: "Roboto";
		src: url("src/assets/fonts/Roboto-Regular.ttf") format("truetype");
	}

	body {
		min-height: 100vh;
		font-family: "Roboto", sans-serif;
		background-color: #333333;
		color: #fff;
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
		width: 860px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;
