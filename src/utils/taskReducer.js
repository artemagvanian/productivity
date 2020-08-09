import actions from "./taskActions";
import { v4 as uuid4 } from "uuid";
import produce from "immer";

const taskReducer = (state, action) => {
  let nextTasks;

  if (action.type === actions.ADD_TASK) {
    nextTasks = produce(state.current, (draftTasks) => {
      draftTasks.push({ ...action.payload.task, id: uuid4() });
    });
  }
  if (action.type === actions.CHANGE_TITLE) {
    nextTasks = produce(state.current, (draftTasks) => {
      draftTasks.find((el) => el.id === action.payload.id).title =
        action.payload.newTitle;
    });
  }
  if (action.type === actions.COMPLETE_TASK) {
    nextTasks = produce(state.current, (draftState) => {
      draftState.splice(
        draftState.findIndex((el) => el.id === action.payload.id),
        1
      );
    });
  }
  if (action.type === actions.SORT_BY_TITLE) {
    nextTasks = produce(state.current, (draftState) => {
      draftState.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase());
    });
  }
  if (action.type === actions.MOVE) {
    nextTasks = produce(state.current, (draftState) => {
      draftState.splice(
        action.payload.to,
        0,
        draftState.splice(action.payload.from, 1)[0]
      );
    });
  }
  if (action.type === actions.UNDO) {
    if (state.past.length > 0) {
      return produce(state, (draftState) => {
        draftState.future.unshift(draftState.current);
        draftState.current = draftState.past.pop();
      });
    } else {
      return state;
    }
  }
  if (action.type === actions.REDO) {
    if (state.future.length > 0) {
      return produce(state, (draftState) => {
        draftState.past.push(draftState.current);
        draftState.current = draftState.future.shift();
      });
    } else {
      return state;
    }
  }

  return produce(state, (draftState) => {
    draftState.past.push(draftState.current);
    draftState.current = nextTasks;
    draftState.future = [];
  });
};

export default taskReducer;
