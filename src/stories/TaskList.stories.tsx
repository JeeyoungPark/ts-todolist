import TaskList from "../components/TaskList";
import TaskProvider from "../contexts/TaskProvider";

export default {
  title: 'Component/TaskList',
  component: TaskList,
}

export const Default = () => {
  const tasks = [
    {
      id: '123',
      content: 'initial todo',
      complete: false,
    },
    {
      id: '123',
      content: 'initial todo',
      complete: false,
    },
  ]

  return (
    <TaskProvider initialTask={tasks}>
      <TaskList />
    </TaskProvider>
  );
}
