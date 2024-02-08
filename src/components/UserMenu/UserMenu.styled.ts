import styled from '@emotion/styled';
import { Button } from 'antd';

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  max-width: 375px;
  padding: 20px;
  margin-left: auto;
  border-bottom: 1px solid #ffffff55;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    max-width: 100%;
    flex-direction: row;
  }
`;

const UserName = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserButton = styled(Button)<{ color?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: ${({ color }) => color};

  &:hover,
  &:focus {
    color: ${({ color }) => color} !important;
  }
`;

export { Menu, UserName, UserButton };
