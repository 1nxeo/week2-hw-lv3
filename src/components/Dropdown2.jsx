import React from "react";
import styled from "styled-components";

const Dropdown2 = ({ list, setList, fav, setFav }) => {
  const choose = (e) => {
    setFav(e.target.value);
    console.log(e.target.value);
    setList(false);
  };
  return (
    <DropdownMenu>
      <DropdownButton onClick={(e) => setList((pre) => !pre)}>
        <div>{fav}</div>
        <div></div>
        <div>▼</div>
      </DropdownButton>
      {list ? (
        <DropdownContent id="myDropdown">
          <DropdownItem onClick={choose} value="리액트">
            리액트
          </DropdownItem>
          <DropdownItem onClick={choose} value="자바">
            자바
          </DropdownItem>
          <DropdownItem onClick={choose} value="스프링">
            스프링
          </DropdownItem>
          <DropdownItem onClick={choose} value="리액트 네이티브">
            리액트 네이티브
          </DropdownItem>
        </DropdownContent>
      ) : null}
    </DropdownMenu>
  );
};

const DropdownMenu = styled.div`
  /* position: relative; */
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: white;
  color: black;
  padding: 12px;
  font-size: 16px;
  width: 300px;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
`;

const DropdownContent = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  border: 1px solid lightgray;
  border-radius: 10px;
  /* display: none; */
`;

const DropdownItem = styled.button`
  color: black;
  width: 300px;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: white;
  border: 1px transparent;
  border-radius: 10px;
  &:hover {
    background-color: lightgray;
  }
`;

// const ListButton = styled.button`
//   width: 200px;
//   border: 1px solid #c4c4c4;
//   box-sizing: border-box;
//   border-radius: 10px;
//   padding: 12px 13px;
//   line-height: 16px;
//   background-color: transparent;
//   appearance: none;
//   text-align: left;
//   &:focus {
//     box-sizing: border-box;
//     border-radius: 10px;

//     border-radius: 10px;
//   }
// `;

// const ListBox = styled.ul`
//   width: 200px;
//   list-style: none;
//   background: #ffffff;
//   border: 1px solid #c4c4c4;
//   box-sizing: border-box;
//   box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
//   border-radius: 10px;
//   margin-top: 15px;
// `;

// const List = styled.li`
//   border: 1px transparent;
//   border-radius: 10px;
//   background-color: #ffffff;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 16px;
//   box-sizing: border-box;
//   &:focus {
//     width: 184px;
//     border-radius: 8px;
//     box-sizing: border-box;
//     text-align: left;
//   }
// `;

// const ListItem = styled.button`
//   width: 200px;
//   border: 1px transparent;
//   box-sizing: border-box;
//   border-radius: 10px;
//   padding: 12px 13px;
//   line-height: 16px;
//   background-color: transparent;
//   appearance: none;
//   text-align: left;
//   &:focus {
//     box-sizing: border-box;
//     border-radius: 10px;
//     border-radius: 10px;
//   }
//   &:hover {
//     background-color: lightgray;
//   }
// `;

export default Dropdown2;
