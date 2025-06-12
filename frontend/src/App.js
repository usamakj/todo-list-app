
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import './App.css';
const API_URL = 'http://localhost:5000/api/tasks';

function App() {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(API_URL);
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchTasks();
  }, []
  )

  const addTask = async (newTask) => {
    try {
      const response = await axios.post(API_URL, newTask);
      setTask((prevTasks) => [...prevTasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
       await axios.delete(`${API_URL}/${id}`);
      setTask((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error Deleting Task:', error);
    }
  };
  const toggleTask = async (id) => {
    try {
      const taskToToggle = tasks.find((task) => task._id === id);
      const updatedTask = { ...taskToToggle, completed: !taskToToggle.completed }
    const response = await axios.put(`${API_URL}/${id}`, updatedTask);
      setTask((prevTasks) => {
        prevTasks.map((task) =>
          task._id === id ? response.data : task
        )
      })
    } catch (error) {
      console.error('error Tpggling task:', error);
    }

  }


  return (
    <div className="App">
      < Header />
      <TaskForm onAddTask={addTask} />
      {tasks.length > 0 ? (
        <div className='task-list'>
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleTask}
            />
          ))}
        </div>
      ) : (
        <p className='no-tasks-message'>NO tasks to show. Add a new one!</p>
      )}

    </div>
  );
}

export default App;
