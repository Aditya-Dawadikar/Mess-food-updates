import React from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import "../../../css/left-side-list.css";

const LeftSide = () => {
  return (
    <div className="container-fluid d-flex" style={{ width: "30%" }}>
      <div
        className="left-list px-2 mt-4"
        style={{ borderRight: "7px solid #FFB800" }}
      >
        <li>
          <div style={{ borderBottom: "7px solid #FFB800", fontSize: "25px" }}>
            <AccountCircleIcon className="mess-account-icon my-2" />
            My Account
          </div>
        </li>

        <NavLink
          exact
          to="/customer/settings"
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
          to="/customer/settings/savedmess"
          activeClassName="page-switch-active"
        >
          <li className="my-3 py-2">
            <BookmarkIcon
              className="ml-2 mr-4"
              style={{ transform: "scale(1.5)" }}
            />
            My Saved Mess
          </li>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftSide;
