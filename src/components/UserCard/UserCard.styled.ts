import styled from "@emotion/styled";
import { Card } from "antd";

const StyledCard = styled(Card)`
  width: 600px;
  margin: 100px auto;
  font-size: 20px;
`;

const StyledCardGrid = styled(Card.Grid)`
  width: 100% !important;

  &:last-of-type {
    margin-top: 20px;
  }
`;

export { StyledCard, StyledCardGrid };
