import React from "react";
import "./MessSettings.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import TaskListContextProvider from "./TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const AddMenu = () => {
  return (
    <TaskListContextProvider>
    <div style={{ width: "70%" }} className="mt-4">
      <div className="edit-profile ml-1 container">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="MenuName">Menu Name</label>
            <input
              type="text"
              className="form-control"
              id="MenuName"
              placeholder="New Menu"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Type">Type</label>
            <input
              type="text"
              className="form-control"
              id="Type"
              placeholder="for eg: Upwas"
            />
          </div>
          <div className="form-group col-md-6 position-relative">
            <label htmlFor="AddItems">Add Items</label>
            
                  <div className="main">
                    <TaskForm />
                    <TaskList />
                  </div>
            
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="SetPrice">Set Price</label>
            <input type="number" className="form-control" id="SetPrice" placeholder="70 INR"/>
            <div
              id="inc-button"
              className="spinner-button"
              style={{ width: "20px", height: "20px" }}
            >
              <ArrowDropUpIcon
                style={{ cursor: "pointer", color: "#FFB800" }}
              />
            </div>
            <div
              id="dec-button"
              className="spinner-button"
              style={{ cursor: "pointer", width: "20px", height: "20px" }}
            >
              <ArrowDropDownIcon
                style={{ cursor: "pointer", color: "#FFB800" }}
              />
            </div>
            {/* <span className="arrows">
            </span> */}
          </div>
        </div>
        <button type="submit" className="btn btn-warning text-white d-block mx-auto" style={{width:"7rem"}}>
          Save
        </button>
      </div>
    </div>
    </TaskListContextProvider>
  );
};

export default AddMenu;
