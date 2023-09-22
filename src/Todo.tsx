import { useState } from "react";
import TaskList from "./TaskList";

export type todo = {
  id: number;
  text: string;
};

const TodoComporment = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<todo[]>([
    { id: 0, text: "Todo1" },
    { id: 1, text: "Todo2" },
  ]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);
  const addTodoItem = () => {
    setTodos((todos) => [...todos, { id: todos.length, text: inputText }]);
    setInputText("");
  };
  return (
    <>
      <input type="text" value={inputText} onChange={changeHandler} />
      <button onClick={addTodoItem}>追加</button>
      <TaskList todos={todos} />
    </>
  );
};

export default TodoComporment;
