// import './App.css';
import Todo from "./Component/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Addtodo from "./Component/Addtodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let Sno;
    if (todos.length === 0) {
      Sno = 0;
    } else {
      Sno = todos[todos.length - 1].Sno + 1;
    }
    const mytodo = {
      Sno: Sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
  };

  return (
    <div className="App mx-4">
      <Addtodo addTodo={addTodo} />
      <Todo todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
