import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className="list">
      {/* Task 2 – Display Placeholder if No Tasks Yet */}
      {tasks.length === 0 && (
        <li className="item item--empty">No tasks yet. Add your first task above.</li>
      )}
      {/* Task 2 & 3 – Map tasks to TaskItem */}
      {tasks.map((t) => (
        <TaskItem key={t.id} id={t.id} text={t.text} onDelete={onDelete} />
      ))}
    </ul>
  );
}
