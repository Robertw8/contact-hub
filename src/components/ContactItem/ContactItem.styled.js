import styled from "@emotion/styled";
import { Card, Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

const Item = styled(Card)`
  width: 300px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const DeleteButton = styled(Button)``;

const DeleteIcon = styled(DeleteTwoTone)``;

export { Item, DeleteButton, DeleteIcon };
