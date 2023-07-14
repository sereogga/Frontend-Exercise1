import { useState } from "react";
import { Task } from "./Task";

export function TaskList({ tasks, onDeleteTask, onToggleTask, onDeleteCompletedTask }) {
  const numTasks = tasks.length;
  const toDoTasks = tasks.filter((task) => !task.completed).length;

  const [sortBy, setSortBy] = useState('all');

  let sortedTasks;

  if (sortBy === "all") sortedTasks = tasks;

  if (sortBy === "completed")
    sortedTasks = tasks
      .slice()
      .sort((b, a) => Number(a.completed) - Number(b.completed));

  if (sortBy === "active")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));


  return (
    <div>
      <div className='space-between bold'>
        <div>
          <span>{!toDoTasks ? 'Adicione uma tarefa' : toDoTasks === 1 ? `${toDoTasks} tarefa em falta` : `${toDoTasks} tarefas em falta`}</span>
        </div>
        <div>
          <span className='bold filter'>Filtrar por</span>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value='all'>Todas</option>
            <option value='completed'>Completas</option>
            <option value='active'>Por fazer</option>
          </select>
        </div>
      </div>

      <ul className='list white-box'>
        {sortedTasks.map((task) => (
          <Task task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} key={task.id} />
        ))}
      </ul>
      <p className='bold cursor' style={{textAlign: "end"}} onClick={onDeleteCompletedTask}>Limpar tarefas completas</p>
    </div>
  );
}
