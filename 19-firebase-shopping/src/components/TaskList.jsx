import React, { useContext, useEffect, useState } from 'react';
import { addNewTask, deleteTask, getTasks, updateTask } from '../firebase/taskController';
import { AppContext } from '../App';

const task = {
    title: 'Titulo',
    description: 'Descripción'
}

const TaskList = () => {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const [task, setTask] = useState({ title: "", description:"" });
    const [tasks, setTasks] = useState([]);
    const [mode, setMode] = useState('add');

    const {user} = useContext(AppContext);

    const createNewTask = async () => {
        await addNewTask(task);
        setTask({title:"", description:""});
        initializeTasks();
    };

    const updateExistingTask = async() => {
        await updateTask(task);
        setTask({title:"", description:""});
        initializeTasks();
        setMode("add");
    }

    const initializeTasks = () => {
        getTasks()
        .then(t => setTasks([...t]))
        .catch((e) => console.error(e));
    };

    const editTask = (id) => {
        setMode('update');
        const taskToEdit = tasks.find(t => t.id === id);
        setTask({...taskToEdit});
    };

    const deleteExistTask = (id) => {
        deleteTask(id);
        initializeTasks();
    }

    useEffect(() => {
        initializeTasks();
    }, []);

  return (
    <div>
        <h1 className='text-sky-700 font-semibold text-lg'>Bienvenido al List</h1>
        <div className='flex flex-col gap-4'>
            <h2>Introduce una nueva tarea</h2>
            <input 
                type='text' 
                value={task.title} 
                placeholder='Título' 
                className='input-title border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full'
                disabled={!user} 
                onChange={e => setTask({...task, title: e.target.value})}
            />
            <textarea 
                type='text' 
                rows={3} 
                value={task.description} 
                placeholder='Descripción' 
                className='input-description border shadow outline-none focus:ring ring-sky-200 rounded px-2 py-1 w-full' 
                disabled={!user}
                onChange={e => setTask({...task, description: e.target.value})}
            />
            <button 
                className='btn-submit'
                disabled={!user}
                onClick={() => mode === 'add' ? createNewTask() : updateExistingTask()}
            >
                {mode === 'add' ? 'Añadir' : 'Actualizar'}   
            </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                {tasks.map((task) => (
                    <div
                        key={task.id} 
                        className='rounded-lg border border-sky-300 p-4 flex flex-col gap-2'
                    >
                        <h1 className='font-semibold'>{task.title}</h1>
                        <div className='border-t border-sky-300'/>
                        <p>{task.description}</p>
                        <div className='flex justify-between'>
                            <button 
                                className='bg-sky-400 text-white py-1 px-2 rounded'
                                onClick={() => editTask(task.id)}
                            >Editar</button>
                            <button 
                                className='bg-red-600 text-white py-1 px-2 rounded'
                                onClick={() => window.confirm("¿Seguro deseas eliminar esta tarea?") && deleteExistTask(task.id)}
                            >Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        {!user && (
        <p className='text-red-600'>
            Necesita estar Logeado para añadir nueva tarea
        </p>
        )}
    </div>
    
  )
}

export default TaskList
