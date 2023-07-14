import { useState } from "react";

export function Form({ onAddTasks }) {
  const [taskDescription, setTaskDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!taskDescription) return;

    const newTask = { taskDescription, completed: false, id: Date.now() };
    onAddTasks(newTask);

    setTaskDescription("");
  }

  return (
    <div>
      <span className='bold'>Criar uma nova tarefa</span>
      <form className='form white-box' onSubmit={handleSubmit}>

        <input
        style={{border: 'none'}}
          type="text"
          value={taskDescription}
          placeholder="Nova Tarefa"
          onChange={(e) => setTaskDescription(e.target.value)} />
      </form>
    </div>
  );
}
