import React from "react";
import styled from "styled-components";

const StOptionBtn = styled.button`
  height: 40px;
  background-color: white;
  border: transparent;
  justify-content: space-between;
  &:hover {
    background-color: lightgray;
  }
`;

function OptionBtn({ children, ...rest }) {
  return <StOptionBtn {...rest}>{children}</StOptionBtn>;
}

export default OptionBtn;
