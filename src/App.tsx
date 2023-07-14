import { useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { TaskList } from "./TaskList";


function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTasks(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleDeleteCompletedTasks() {
    setTasks((tasks) => tasks.filter((task) => !task.completed));
  }

  function handleToggleTasks(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );


  }

  return (
    <>
    <div className='container'>
      <Header />
      <Form onAddTasks={handleAddTasks} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTasks}
        onDeleteCompletedTask={handleDeleteCompletedTasks}
        onToggleTask={handleToggleTasks}
      />
    </div>
    </>
  )
}

export default App
