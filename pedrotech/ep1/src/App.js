import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setNewTaskList] = useState([]);

  const createNewTask = (event) => {
    setNewTask(event.target.value);
  }

  const addNewTask = () => {
    
    const tsk = {
      id : taskList.length === 0 ? 0 : taskList[taskList.length - 1].id + 1,
      taskname : newTask
    }

    const newTaskList = [...taskList, tsk];
    setNewTaskList(newTaskList);
  }

  const deleteTask = (targettask) => {
    setNewTaskList(taskList.filter((task) => task.id !== targettask));
  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={createNewTask}/>
        <button onClick={addNewTask}>Add Task</button>
      </div>
      {taskList.map((task, index) => {
        return <div className='tasklist' key={index}>{task.id}<button onClick={() => deleteTask(task.id)}>X</button></div>
      })}
    </div>
  )
}

export default App