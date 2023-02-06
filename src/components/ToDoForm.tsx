import React, { FormEventHandler, ChangeEventHandler, useState } from "react";

type ToDoFormProps = {
  addTask: (value: string) => void;
};

function ToDoForm({ addTask }: ToDoFormProps) {
  const [userInput, setUserInput] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter a task..."
      />
      <button>Save task</button>
    </form>
  );
}

export default ToDoForm;
