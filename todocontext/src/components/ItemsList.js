import React, {useContext } from "react";
import List from "./List";
import { TodoContext } from "./context";

const ItemsList = () => {
  const [todos, setTodos] = useContext(TodoContext);
  return (
    <div>
      <ul>
        {todos.map((item, i) => {
          return (
            <>
              {item && (
                <List
                  key={i}
                  todo={item}
                  className={item.completed ? "done" : ""}
                />
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemsList;
