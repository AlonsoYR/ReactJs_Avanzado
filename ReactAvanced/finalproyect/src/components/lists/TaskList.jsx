import React, { useState } from "react";

/**
 * Componente que gestiona la lista de tareas
 *
 * @returns {React.Component}
 */

const TaskList = () => {
  const [newTask, setNewTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  const addNewTask = () => {
    setTasklist([...tasklist, newTask]);
    setNewTask("");
  };

  const isTasksEmpty = () => tasklist.length === 0;

  const removeItem = (index) => {
    const newtasklist = tasklist.filter((t, i) => i !== index);
    setTasklist(newtasklist);
  };

  return (
    <>
      <h1>Task List</h1>
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
          type="text"
        />
        <button onClick={addNewTask}>Create Task</button>
      </div>
      {isTasksEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        <ul>
          {tasklist.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onClick={() => removeItem(index)}
                checked={false}
              />
              {task}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TaskList;