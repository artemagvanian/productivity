import React from "react";
import Task from "./Task";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const SortableTask = SortableElement(
  ({ title, id, changeTitle, completeTask, classifier }) => (
    <Task
      title={title}
      id={id}
      changeTitle={changeTitle}
      completeTask={completeTask}
      classifier={classifier}
    />
  )
);

const SortableTaskList = SortableContainer(
  ({ tasks, changeTitle, completeTask, classifier }) => {
    return (
      <div>
        {tasks.map((task, index) => (
          <SortableTask
            index={index}
            title={task.title}
            id={task.id}
            changeTitle={changeTitle}
            completeTask={completeTask}
            key={task.id}
            classifier={classifier}
          />
        ))}
      </div>
    );
  }
);

const TaskList = ({ tasks, changeTitle, completeTask, move, classifier }) => {
  const onSortEnd = ({ oldIndex, newIndex }) => {
    move(oldIndex, newIndex);
  };
  return (
    <section>
      <h2>Current task list</h2>
      <SortableTaskList
        changeTitle={changeTitle}
        completeTask={completeTask}
        tasks={tasks}
        onSortEnd={onSortEnd}
        useDragHandle
        classifier={classifier}
      />
    </section>
  );
};

export default TaskList;
