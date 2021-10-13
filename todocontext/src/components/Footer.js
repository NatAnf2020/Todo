import React, { useContext } from "react";
import { TodoContext } from "./context";

const Footer = () => {
  const [todos, setTodos] = useContext(TodoContext);

  const deleteAll = () => {
    setTodos([]);
  };
  return (
    <button onClick={() => deleteAll()} className="clearAll">
      Clear all
    </button>
  );
};

export default Footer;
