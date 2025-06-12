import React from 'react'
import { FaTimes, FaCheckCircle, FaRegCircle } from 'react-icons/fa';
const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.completed ? 'complete' : ''}`}>
            <div>
                {task.completed ? (
                    <FaCheckCircle style={{ cursor: 'pointer', color: 'green', marginRight: '10px' }}
                        onClick={() => onToggle(task._id)} />
                ) : (
                    <FaRegCircle style={{ cursor: 'pointer', color: 'gray', marginRight: '10px' }}
                        onClick={() => onToggle(task._id)}
                    />
                )}
                <span className='task-text'>{task.text}</span>
            </div>
            <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task._id)}
            />

        </div>
    )
};

export default TaskItem