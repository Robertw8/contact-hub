import styled from "@emotion/styled";
import { Button } from "antd";

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  padding: 20px;
  margin-left: auto;
  border-bottom: 1px solid #ffffff55;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const UserName = styled.p`
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const LogoutButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

export { Menu, UserName, LogoutButton };
