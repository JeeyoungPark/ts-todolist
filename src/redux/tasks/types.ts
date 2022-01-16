export interface Task {
  id: string;
  content: string;
  complete: boolean;
}

export type ActionType = 'ADD_TASK' | 'UPDATE_TASK' | 'REMOVE_TASK';

// payload: 실제로 들어가는 값
export type Action = {
  type: ActionType,
  payload: Task
}

