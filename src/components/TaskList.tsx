import styled from "@emotion/styled";
// import { useTasks } from "../contexts/TaskProvider";
import Task from "./Task";
import { useSelector } from 'react-redux';
import { RootState } from "../redux";

const TaskList = (props: any) => {
  // const { tasks } = useTasks();
  const tasks = useSelector((store: RootState) => store.tasks)

  return (
    <ListContainer>
      <UnorderedList {...props}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            complete={task.complete}
          />
        ))}
      </UnorderedList>
    </ListContainer>
  );
}

export default TaskList;

const ListContainer = styled.div`
  width: 500px;
  height: 410px;
  margin-top: 15px;
  padding: 2px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const UnorderedList = styled.ul`
  width: 400px;
  margin: 0;
  padding: 0;

  & > li {
    &:not(:first-of-type) {
      margin-top: 10px;
    }
  }
`;
