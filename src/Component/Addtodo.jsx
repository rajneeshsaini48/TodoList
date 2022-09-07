import React from "react";
import { useState } from "react";

const Addtodo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
  
  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
        alert("Title or Description Cannot be Blank")
    }else{
    props.addTodo(title,desc);
    setTitle("");
    setDesc("")
    }
  };
  

  return (
    <div className="container my-4">
      <h2 >ADD A TODO</h2>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={ (e) => {
                setTitle(e.target.value);
              }}
            className="form-control"
            id="title"
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Decsription" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={ (e) => {
                setDesc(e.target.value);
              }}
            className="form-control"
            id="Decsription"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
