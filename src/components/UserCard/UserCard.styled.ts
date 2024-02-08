import styled from '@emotion/styled';
import { Card } from 'antd';

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 375px;
  margin: 100px auto;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    max-width: 500px;
  }
`;

const StyledCardGrid = styled(Card.Grid)`
  width: 100% !important;

  &:last-of-type {
    margin-top: 20px;
  }
`;

export { StyledCard, StyledCardGrid };
