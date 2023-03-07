import React, { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Modal2 from "./components/Modal2";
import styled from "styled-components";
import { VscBellDot, VscChevronRight } from "react-icons/vsc";
import Dropdown from "./components/Dropdown";
import Dropdown2 from "./components/Dropdown2";

function App() {
  // Input
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);

  const changeNum = (e) => {
    const val = e.target.value;
    const removedCommaValue = Number(val.replaceAll(",", ""));
    setNum(removedCommaValue.toLocaleString());
  };
  const savedAlarm = (e) => {
    alert(`name : ${name}, price : ${num.replaceAll(",", "")}`);
    setName("");
    setNum(0);
  };

  //Modal
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const openModal = (e) => {
    modal ? setModal(false) : setModal(true);
  };
  const openModal2 = (e) => {
    modal2 ? setModal2(false) : setModal2(true);
  };

  //select #1
  const [list, setList] = useState(false);
  const [fav, setFav] = useState("리액트");

  //select #2
  const [list2, setList2] = useState(false);
  const [fav2, setFav2] = useState("리액트");

  return (
    <>
      <h1>Button</h1>
      <Box>
        <Button bold primary>
          Large Primary Button
          <VscChevronRight />
        </Button>
        <Button medium>Medium</Button>
        <Button>Small</Button>
      </Box>
      <Box>
        <Button bold primary negative>
          Large Negative Button <VscBellDot color="black" />
        </Button>
        <Button negative medium>
          Medium
        </Button>
        <Button negative>Small</Button>
      </Box>

      <h1>Input</h1>
      <Box>
        <label>이름</label>
        <StInput value={name} onChange={(e) => setName(e.target.value)} />
        <label>가격</label>
        <StInput value={num} onChange={changeNum} />
        <Button onClick={savedAlarm}>저장</Button>
      </Box>

      <h1>Modal</h1>
      <Box>
        <Button onClick={openModal} medium>
          open modal
        </Button>
        {modal ? <Modal modal={modal} setModal={setModal}></Modal> : null}
        <Button primary negative bold onClick={openModal2}>
          open modal
        </Button>
        {modal2 ? <Modal2 modal={modal2} setModal={setModal2}></Modal2> : null}
      </Box>
      <div
        style={{
          height: "200px",
          border: "2px solid lightgray",
          borderRadius: "10px",
          margin: "10px",
          overflow: "hidden",
        }}
      >
        <h1>Select</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <Dropdown list={list} setList={setList} fav={fav} setFav={setFav} />
          <Dropdown2
            list={list2}
            setList={setList2}
            fav={fav2}
            setFav={setFav2}
          />
        </div>
      </div>
    </>
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const StInput = styled.input`
  font-size: 15px;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
`;

export default App;
