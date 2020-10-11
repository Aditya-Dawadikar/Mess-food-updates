import React, { useContext } from "react";
import { TaskListContext } from "./TaskListContext";
// import Task from "./Task";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const TaskList = () => {
  const { tasks, removeTask, findItem } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length ? (
        <ul className="list">
          {tasks.map((task) => {
            return (
              <li className="list-item" key={task.id}>
                <span>{task.title} </span>
                <div>
                  <button
                    className="btn-edit task-btn mr-3"
                    onClick={() => findItem(task.id)}
                  >
                    <EditIcon style={{ color: "#FFB800" }} />
                  </button>
                  <button
                    className="btn-delete task-btn mr-3"
                    onClick={() => removeTask(task.id)}
                  >
                    <DeleteIcon style={{ color: "#FFB800" }} />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="no-tasks font-monospace">No Menu Items</div>
      )}
    </div>
  );
};

export default TaskList;
