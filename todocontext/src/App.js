import React from "react";
import "./App.css";
import { TodoProvider } from "./components/context";
import Footer from "./components/Footer";
import FormInputs from "./components/FormInput";
import List from "./components/ItemsList";

function App() {
  return (
    <TodoProvider>
      <main>
        <h1>WEVENTURE Coding Challenge</h1>
       <FormInputs />
         <List />
        <Footer />
      </main>
    </TodoProvider>
  );
}
export default App;
