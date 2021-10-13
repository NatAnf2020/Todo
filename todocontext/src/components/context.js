import React, { useEffect, createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("store"));
    if (store) setTodos(store);
  }, []);

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
