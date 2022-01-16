import React from 'react';
import styled from "@emotion/styled";
// import TaskProvider from './contexts/TaskProvider';
import Header from './components/Header';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

function App() {
  return (
    // <TaskProvider>
      <Container>
        <Header>To Do</Header>
        <NewTaskForm />
        <TaskList/>
      </Container>
    // </TaskProvider>
  );
}

export default App;
