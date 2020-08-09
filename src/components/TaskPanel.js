import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";

import Menu from "./Menu";
import TaskList from "./TaskList";
import actions from "../utils/taskActions";
import useLocalStorageReducer from "../utils/useLocalStorageReducer";
import taskReducer from "../utils/taskReducer";

import { load } from "../utils/toxicityClassifier";

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const TaskPanel = () => {
  const [state, dispatch] = useLocalStorageReducer("tasks", taskReducer, {
    past: [],
    current: [],
    future: [],
  });

  const [classifier, setClassifier] = useState(null);

  useEffect(() => {
    const fn = async () => {
      if (classifier === null) {
        setClassifier(await load());
        console.log("Loaded Classifier");
      }
    };
    fn();
  }, [setClassifier]);

  const addTask = useCallback(
    (title) => {
      dispatch({
        type: actions.ADD_TASK,
        payload: { task: { title } },
      });
    },
    [dispatch]
  );

  const changeTitle = useCallback(
    (id, newTitle) => {
      dispatch({
        type: actions.CHANGE_TITLE,
        payload: { id, newTitle },
      });
    },
    [dispatch]
  );

  const completeTask = useCallback(
    (id) => {
      dispatch({ type: actions.COMPLETE_TASK, payload: { id } });
    },
    [dispatch]
  );

  const undo = useCallback(() => {
    dispatch({ type: actions.UNDO });
  }, [dispatch]);

  const redo = useCallback(() => {
    dispatch({ type: actions.REDO });
  }, [dispatch]);

  const sortByTitle = useCallback(() => {
    dispatch({ type: actions.SORT_BY_TITLE });
  }, [dispatch]);

  const move = useCallback(
    (from, to) => {
      dispatch({ type: actions.MOVE, payload: { from, to } });
    },
    [dispatch]
  );

  return (
    <Container>
      <Menu
        addTask={addTask}
        undo={undo}
        redo={redo}
        sortByTitle={sortByTitle}
      />
      <TaskList
        tasks={state.current}
        changeTitle={changeTitle}
        completeTask={completeTask}
        move={move}
        classifier={classifier}
      />
    </Container>
  );
};

export default TaskPanel;
