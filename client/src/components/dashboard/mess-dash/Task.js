import React, { useContext } from 'react'
import { TaskListContext } from './TaskListContext'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button className="btn-edit task-btn mr-3" onClick={() => findItem(task.id)}>
          <EditIcon style={{color:"#FFB800"}}/>
        </button>
        <button
          className="btn-delete task-btn mr-3"
          onClick={() => removeTask(task.id)}
        >
          <DeleteIcon style={{color:"#FFB800"}}/>
        </button>
      </div>
    </li>
  )
}

export default Task