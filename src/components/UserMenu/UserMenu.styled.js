import styled from "@emotion/styled";
import { Button } from "antd";

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 30%;
  margin-left: auto;
`;

const UserName = styled.p`
  color: #fff;
`;

const LogoutButton = styled(Button)`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

export { Menu, UserName, LogoutButton };
