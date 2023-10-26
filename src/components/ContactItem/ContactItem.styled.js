import styled from "@emotion/styled";
import { Card } from "antd";

const Item = styled(Card)`
  width: 300px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export { Item };
