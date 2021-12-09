import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function isStringValid(string) {
    if (string.length > 0 && typeof string === "string") {
      return true;
    } else {
      console.log("argument is not a string");
      return false;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isStringValid(name)) {
      return;
    }
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
