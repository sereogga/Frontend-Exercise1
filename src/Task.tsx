import { useState } from "react";

export function Task({ task, onDeleteTask, onToggleTask }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <li
      className='space-between'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >

          <div className='checkbox'>
            <input
            type="checkbox"
            value={task.completed}
            onChange={() => {
              onToggleTask(task.id);
            }} />
            <span style={task.completed ? { textDecoration: "line-through" } : {}}>
              {task.taskDescription}
            </span>
          </div>
          <div>
           {isHovering && (
            <img className='btn-delete' onClick={() => onDeleteTask(task.id)} src='images/delete.png'></img>
            // <button  >X</button>
            )}
          </div>

    </li>
  );
}
