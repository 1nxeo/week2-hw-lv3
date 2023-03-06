import React from "react";
import styled from "styled-components";

const Dropdown = ({ list, setList, fav, setFav }) => {
  const choose = (e) => {
    setFav(e.target.value);
    console.log(e.target.value);
    setList(false);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ListButton
        onClick={(e) => {
          setList((pre) => !pre);
          console.log(list);
        }}
      >
        {fav}
      </ListButton>
      {list ? (
        <ListBox style={{ margin: "0", padding: "0" }}>
          <List>
            <ListItem onClick={choose} value="리액트">
              리액트
            </ListItem>
          </List>
          <List>
            <ListItem onClick={choose} value="자바">
              자바
            </ListItem>
          </List>
          <List>
            <ListItem onClick={choose} value="스프링">
              스프링
            </ListItem>
          </List>
          <List>
            <ListItem onClick={choose} value="리액트네이티브">
              리액트네이티브
            </ListItem>
          </List>
        </ListBox>
      ) : null}
    </div>
  );
};

const ListButton = styled.button`
  width: 200px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 13px;
  line-height: 16px;
  background-color: transparent;
  appearance: none;
  text-align: left;
  &:focus {
    box-sizing: border-box;
    border-radius: 10px;

    border-radius: 10px;
  }
`;

const ListBox = styled.ul`
  width: 200px;
  list-style: none;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin-top: 15px;
`;

const List = styled.li`
  border: 1px transparent;
  border-radius: 10px;
  background-color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  box-sizing: border-box;
  &:focus {
    width: 184px;
    border-radius: 8px;
    box-sizing: border-box;
    text-align: left;
  }
`;

const ListItem = styled.button`
  width: 200px;
  border: 1px transparent;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 13px;
  line-height: 16px;
  background-color: transparent;
  appearance: none;
  text-align: left;
  &:focus {
    box-sizing: border-box;
    border-radius: 10px;
    border-radius: 10px;
  }
  &:hover {
    background-color: lightgray;
  }
`;

export default Dropdown;
