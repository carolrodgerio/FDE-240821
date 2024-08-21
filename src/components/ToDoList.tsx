import { useState } from 'react';

interface ToDoListProps {
    tasks: Task[];
    setTasks: (task: Task[]) => void;
}

export interface Task {
    id: number;
    text: string;
    bgColor: string;
}

export function ToDoList({ tasks, setTasks }: ToDoListProps) {
    const [newTask, setNewTask] = useState<string>('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const newTaskObject: Task = {
                id: Date.now(),
                text: newTask,
                bgColor: '#ec185b'
            };
            setTasks([...tasks, newTaskObject]);
            setNewTask('');
        } else {
            alert('Digite a tarefa a ser feita >:(')
        }
    };

    const handleRemoveTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className='to-do-list'>
            <h1>☆ Lista de tarefas ☆</h1>
            <div className='add-task-input'>
                <input
                    type='text'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder='O que vamos fazer hoje?'
                    required
                />
                <button onClick={() => handleAddTask()}>Adicionar tarefa</button>
            </div>
            <ul className='task-list'>
                {tasks.map((task) => (
                    <li key={task.id} className='task' style={{ backgroundColor: task.bgColor }}>
                        {task.text}
                        <button onClick={() => handleRemoveTask(task.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}