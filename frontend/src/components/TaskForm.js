import React, { useState } from 'react'

const TaskForm = ({ onAddTask }) => {
    const [text, setText] = useState('');

    const OnSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('please Add the Text');
            return
        }
        onAddTask({ text });
        setText(); // ya lekhna ka band input field ko ktham kar data hai
    }

    return (
        <form onSubmit={OnSubmit}>
            <div className='form-control'>
                <label htmlFor='taskText'>Task:</label>

                <input type='text' placeholder='Add Task....' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <button type='submit' className='btn btn-block' >Add Task</button>
        </form>
    )
}

export default TaskForm;