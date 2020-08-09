import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const Container = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");

  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        addTask(title);
        setTitle("");
      }}
    >
      <Input
        type="text"
        value={title}
        placeholder="Title"
        required
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Button type="submit" value="Submit" />
    </Container>
  );
};

export default AddTask;
