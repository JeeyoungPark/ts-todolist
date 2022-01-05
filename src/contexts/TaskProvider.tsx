import { createContext, ReactChild, useContext } from "react";
import { v4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

interface Task {
  id: string;
  content: string;
  complete: boolean;
}

// I+객체: I 다음에 나오는 객체에 대한 인터페이스
interface ITaskContext {
  tasks: Task[];
  addTask(content: string): void;
  updateTask(id: string, status: boolean): void;
  removeTask(id: string): void;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export const useTasks = () => useContext(TaskContext);

interface TaskProviderProps {
  children: ReactChild;
  initialTask?: Task[];
}

const TaskProvider = ({ children, initialTask = [] }: TaskProviderProps) => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', initialTask);

  const addTask = (content: string) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content,
        complete: false,
      }
    ]);
  }

  const updateTask = (id: string, status: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, complete: status} : task
      )
    );
  }

  const removeTask = (id: string) => {
    setTasks(
      tasks.filter(task => task.id !== id)
    );
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
