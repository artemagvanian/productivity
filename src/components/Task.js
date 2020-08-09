import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import { FaBars } from "react-icons/fa";
import { SortableHandle } from "react-sortable-hoc";

const DragHandle = styled(
  SortableHandle(({ className }) => <FaBars className={className} />)
)`
  margin-right: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid hsl(0, 0%, 50%);
  align-items: center;
`;

const Task = React.memo(
  ({ id, title, changeTitle, completeTask, classifier }) => {
    return (
      <Container>
        <DragHandle />
        <Input
          type="text"
          value={title}
          onChange={(e) => changeTitle(id, e.target.value)}
        />
        <Label text={title} classifier={classifier} />
        <Button
          value="Complete"
          type="submit"
          onClick={() => completeTask(id)}
        />
      </Container>
    );
  }
);

export default Task;
