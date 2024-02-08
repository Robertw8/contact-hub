import styled from "@emotion/styled";
import { Button } from "antd";

const WelcomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 20% 0;
	user-select: none;
`;

const AuthLinks = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;
	margin-top: 50px;
`;

const WelcomeText = styled.p`
	color: #fff;
	text-align: center;
	font-size: 48px;
	z-index: 10;
`;

const StyledAuthButton = styled(Button)`
	width: 150px;
	height: 60px;

	font-size: 18px;
`;

export { AuthLinks, WelcomeText, WelcomeWrapper, StyledAuthButton };
