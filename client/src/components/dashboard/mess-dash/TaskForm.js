import React, { useState, useContext, useEffect } from "react";
import { TaskListContext } from "./TaskListContext";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ClearAllIcon from "@material-ui/icons/ClearAll";

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Items..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="button position-absolute" style={{ right: "0" }}>
        <button
          type="submit"
          className="btn add-task-btn pr-2"
          style={{ color: "#FFB800" }}
        >
          {editItem ? <CheckCircleIcon /> : <AddCircleIcon />}
        </button>
        <button className="btn clear-btn mr-2" onClick={clearList}>
          <span>
            <ClearAllIcon />
          </span>
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
