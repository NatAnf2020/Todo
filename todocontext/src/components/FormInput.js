import React, {useState, useContext } from "react";
import { TodoContext } from "./context";

const FormInputs = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [textName, setTextName] = useState("");

  const handleChange = (e) => setTextName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: textName, completed: false }]);
    setTextName("");
  };

  return (
    <form autocomlete="off" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={textName}
        placeholder="What needs to be accomplished today?"
        onChange={handleChange}
      />
    </form>
  );
};

export default FormInputs;
