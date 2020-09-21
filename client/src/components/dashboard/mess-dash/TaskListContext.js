import React, { createContext, useState, useEffect } from 'react'
import uuid from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []
  
  const [editItem, setEditItem] = useState(null)
  const [tasks, setTasks] = useState(initialState)
 
  const { addList } = props;
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
    // console.log(tasks);
    addList(tasks);
  }, [tasks])

  
  // Add tasks
  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }]) 
    props.addList(tasks);
  }
  
  // Remove tasks
  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
    props.addList(tasks);
  }
  
  // Clear tasks
  const clearList = () => {
    setTasks([])
    props.addList(tasks);
  }
  
  // Find task
  const findItem = id => {
    const item = tasks.find(task => task.id === id)
    setEditItem(item)
  }

  // Edit task
  const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))
    
    console.log(newTasks)

    setTasks(newTasks)
    setEditItem(null)
    props.addList(tasks);
  }

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider