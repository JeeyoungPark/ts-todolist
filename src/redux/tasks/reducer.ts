// 상태를 변화시키는 순수함수
import { Task, Action } from "./types";

export const tasks = (state: Task[] = [], action: Action) => {
  switch(action.type) {
    case 'ADD_TASK': {
      const newTask = action.payload;
      return [...state, newTask];
    }
    case 'UPDATE_TASK': {
      const updatedTask = action.payload;
      return state.map(oldTask => oldTask.id === updatedTask.id ? updatedTask : oldTask);
    }
    case 'REMOVE_TASK': {
      const removedTask = action.payload;
      return state.filter(oldTask => oldTask.id !== removedTask.id);
    }
    // 예외처리
    default: {
      return state;
    }
  }
}
