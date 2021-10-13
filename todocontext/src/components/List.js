import React, {useContext } from "react";
import { TodoContext } from "./context";

const List = ({ className, todo }) => {
  const [todos, setTodos] = useContext(TodoContext);

  const onClick = () => {
    const newTodo = todos.map((t) => {
      if (t.text === todo.text) {
        t.completed = !t.completed;
        return t;
      }
      return t;
    });
    setTodos(newTodo);
  };

  const deleteTodo = () => {
    const newTodo = todos.filter((t) => t.text !== todo.text);
    setTodos(newTodo);
  };
  return (
    <li className={className}>
      <span onClick={onClick}>{todo.text}</span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
};

export default List;
