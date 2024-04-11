import React, { useEffect, useState } from 'react';
import { addNewTask, getTasks } from '../firebase/taskController';

const task = {
    title: 'Titulo',
    description: 'Descripción'
}

const TaskList = () => {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const [task, setTask] = useState({ title: "", description:"" });
    const [tasks, setTasks] = useState([]);

    const createNewTask = async () => {
        console.log(task);
        await addNewTask(task);
    }

    useEffect(() => {
        getTasks()
        .then(t => setTasks([...t]))
        .catch((e) => console.error(e));
    }, [])

  return (
    <div>
        <h1 className='text-sky-700 font-semibold text-lg'>Bienvenido al List</h1>
        <div className='flex flex-col gap-4'>
            <h2>Introduce una nueva tarea</h2>
            <input 
                type='text' 
                value={task.title} 
                placeholder='Título' 
                className='border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full' 
                onChange={e => setTask({...task, title: e.target.value})}
            />
            <textarea 
                type='text' 
                rows={3} 
                value={task.description} 
                placeholder='Descripción' 
                className='border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full' 
                onChange={e => setTask({...task, description: e.target.value})}
            />
            <button 
                className='bg-sky-400 text-white rounded shadow py-1 hover:bg-sky-500 transition font-semibold'
                onClick={createNewTask}
            >
                    Añadir
            </button>
            <button onClick={getTasks}>Tareas</button>
            <div>
                {tasks.map((task) => (
                    <div
                        key={task.id} 
                        className='rounded-lg border border-sky-300 p-4 flex flex-col gap-2'
                    >
                        <h1 className='font-semibold'>{task.title}</h1>
                        <div className='border-t border-sky-300'/>
                        <p>{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default TaskList
