import React, { useState } from "react";
import type { todo } from "./Todo";

type TaskListProps = {
  todos: todo[];
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
};

const TaskList: React.FC<TaskListProps> = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");

  const completeTodo = (todo: todo) => {
    const newTodos = todos.filter((_todo) => {
      return _todo.id !== todo.id;
    });
    setTodos(newTodos);
  };
  const toggleEditMode = (_todo: todo) => {
    setInputValue(_todo.text);
    const newTodos2 = todos.map((todo) =>
      todo.id === _todo.id ? { ...todo, isEditing: true } : todo
    );
    return setTodos(newTodos2);
  };
  const updateTodo = (todo: todo) => {
    console.log(todo);
    console.log(inputValue);
    const newTodo3: todo = {
      ...todo,
      isEditing: !todo.isEditing,
      text: inputValue,
    };
    console.log(typeof todo.id);
    console.log(typeof newTodo3.id);

    const newTodos3 = todos.map((todo) =>
      todo.id === newTodo3.id ? newTodo3 : todo
    );
    setTodos(newTodos3);
    console.log(todos);
    return;
  };
  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setInputValue(e.target.value);
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {/* <form style={{ display: "inline" }}> */}
            {todo.isEditing ? (
              <input
                type="text"
                defaultValue={inputValue}
                onChange={(e) => changeInputHandler(e)}
              />
            ) : (
              <span onDoubleClick={() => toggleEditMode(todo)}>
                {todo.text}
              </span>
            )}
            {todo.isEditing ? (
              <button onClick={() => updateTodo(todo)}>更新</button>
            ) : (
              <button onClick={() => completeTodo(todo)}>完了</button>
            )}
            {/* </form> */}
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
