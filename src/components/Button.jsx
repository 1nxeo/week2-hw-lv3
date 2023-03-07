import React from "react";
import styled from "styled-components";

function Button({ children, ...rest }) {
  return <StButton {...rest}>{children}</StButton>;
}

const StButton = styled.button`
  /* 기본 스타일 */
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) =>
    props.primary ? "200px" : props.medium ? "120px" : "80px"};
  height: ${(props) =>
    props.primary ? "50px" : props.medium ? "40px" : "35px"};
  border-radius: 8px;
  margin: 5px;

  /* 설정해줄 스타일 */
  border: 3px solid ${(props) => (props.negative ? "#FAB1A0" : "#55EFC4")};
  background-color: ${(props) =>
    props.primary ? "white" : props.negative ? "#FAB1A0" : "#55EFC4"};
  color: ${(props) => (props.negative ? "#D63031" : "black")};
  font-weight: ${(props) => (props.bold ? "800" : "500")};
`;

export default Button;
