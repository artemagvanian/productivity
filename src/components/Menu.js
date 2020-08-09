import React from "react";
import { FaRedo, FaUndo, FaSortAlphaUp } from "react-icons/fa";
import styled from "styled-components";
import AddTask from "./AddTask";

const Button = styled.button`
  background: hsl(180, 50%, 75%);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 20px 10px 20px 0;
  padding: 5px 7px;

  &:hover {
    background: hsl(180, 75%, 75%);
  }
`;

const Controls = styled.div`
  display: flex;
`;

const Menu = ({ addTask, undo, redo, sortByTitle }) => {
  return (
    <div>
      <Controls>
        <h2>Add your tasks</h2>
        <Button onClick={undo} style={{ marginLeft: "auto" }}>
          <FaUndo />
        </Button>
        <Button onClick={redo}>
          <FaRedo />
        </Button>
        <Button onClick={sortByTitle}>
          <FaSortAlphaUp />
        </Button>
      </Controls>
      <AddTask addTask={addTask} />
    </div>
  );
};

export default Menu;
