import React from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../../../css/left-side-list.css";

const LeftSideList = () => {
  return (
    <>
      <NavLink
        to="/mess/mess-user-1"
        style={{
          color: "white",
          paddingLeft: "10px",
          paddingTop: "10px",
          textDecoration: "none",
        }}
      >
        <ArrowBackIcon
          className="arrow-icon my-1"
          style={{
            color: "#FFB800",
            transform: "scale(1.5)",
          }}
        />
      </NavLink>
      <div
        className="container-fluid d-flex"
        style={{ marginLeft: "8%", width: "25%" }}
      >
        <div
          className="left-list px-2 mt-4"
          style={{ borderRight: "5px solid #FFB800" }}
        >
          <li>
            <div style={{ borderBottom: "5px solid #FFB800" ,fontSize:"25px"}}>
              <AccountCircleIcon className="mess-account-icon my-2" />
              My Account
            </div>
          </li>

          <NavLink
            exact
            to="/mess/mess-user-2"
            activeClassName="page-switch-active"
          >
            <li className="my-3 py-2">
              <PersonIcon
                className="ml-2 mr-4"
                style={{ transform: "scale(1.5)" }}
              />
              Edit Profile
            </li>
          </NavLink>

          <NavLink
            exact
            to="/mess/mess-user-3"
            activeClassName="page-switch-active"
          >
            <li className="my-3 py-2">
              <BookmarkIcon
                className="ml-2 mr-4"
                style={{ transform: "scale(1.5)" }}
              />
              My Saved Menus
            </li>
          </NavLink>

          <NavLink
            exact
            to="/mess/mess-user-4"
            activeClassName="page-switch-active"
          >
            <li className="my-3 py-2">
              <PostAddIcon
                className="ml-2 mr-4"
                style={{ transform: "scale(1.5)" }}
              />
              Add new menu
            </li>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default LeftSideList;
