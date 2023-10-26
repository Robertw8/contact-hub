import styled from "@emotion/styled";
import { Input } from "antd";

const FilterWrapper = styled.div`
  max-width: 300px;
  margin: 20px auto;

  @media screen and (max-width: 768px) {
    max-width: 80%;
  }
`;

const StyledFilterInput = styled(Input)`
  font-size: 16px;
  height: 40px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    height: 50px;
  }
`;

export { FilterWrapper, StyledFilterInput };
