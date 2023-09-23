import React from "react";
import type { todo } from "./Todo";

type TaskListProps = {
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
};

const TaskList: React.FC<TaskListProps> = ({ todos, setTodos }) => {
  const completeTodo = (todo: todo) => {
    const newTodos = todos.filter((_todo) => {
      return _todo.id !== todo.id;
    });
    setTodos(newTodos);
  };
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li>{todo.text}</li>
            <button onClick={() => completeTodo(todo)}>完了</button>
          </div>
        );
      })}
    </ul>
  );
};

export default TaskList;
