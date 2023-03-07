import React from "react";
import styled from "styled-components";

function OptionBtn({ children, ...rest }) {
  return <StOptionBtn {...rest}>{children}</StOptionBtn>;
}

const StOptionBtn = styled.button`
  height: 40px;
  background-color: white;
  border: transparent;
  justify-content: space-between;
  &:hover {
    background-color: lightgray;
  }
`;

export default OptionBtn;
