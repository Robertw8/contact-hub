import styled from "@emotion/styled";
import { Button, Drawer } from "antd";

const List = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 40px 20px 100px 20px;
  min-height: 300px;

  border-radius: 10px;
  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;
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

  font-size: 16px;
  width: 150px;
  height: 50px;

  background-color: #1677ff;
`;

const StyledDrawer = styled(Drawer)``;

export { List, AddButton, AddItem, StyledDrawer };
