import styled from '@emotion/styled';
import { Button } from 'antd';

const List = styled.div`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  padding: 40px 20px 100px 20px;
  min-height: 300px;
  border: 1px solid #f9f9f9;

  border-radius: 10px;
  background-color: #f9f9f9;
`;

const AddItem = styled.li`
  position: absolute;
  bottom: 3%;

  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const AddButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 50px;

  font-size: 16px;
  background-color: #1677ff;
`;

export { List, AddButton, AddItem };
