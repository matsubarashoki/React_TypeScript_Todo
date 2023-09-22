import React from "react";
import type { todo } from "./Todo";

type TaskListProps = {
  todos: todo[];
};

const TaskList: React.FC<TaskListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default TaskList;
