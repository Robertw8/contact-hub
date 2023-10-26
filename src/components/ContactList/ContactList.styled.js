import styled from "@emotion/styled";
import { HashLoader } from "react-spinners";
import { DeleteTwoTone } from "@ant-design/icons";
import { Button, Card } from "antd";

const List = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 100px;

  border-radius: 10px;
  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;
`;

const Item = styled(Card)`
  width: 300px;
`;

const AddItem = styled.li`
  position: absolute;
  bottom: 3%;

  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const DeleteButton = styled(Button)``;

const DeleteIcon = styled(DeleteTwoTone)``;

const StyledLoader = styled(HashLoader)`
  position: absolute;
  left: 50%;
  transform: translateY(200%) !important;
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

export {
  List,
  Item,
  StyledLoader,
  DeleteButton,
  DeleteIcon,
  AddButton,
  AddItem,
};
