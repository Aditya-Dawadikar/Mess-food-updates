import React, { useEffect, useState } from "react";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SettingsIcon from "@material-ui/icons/Settings";
import Badge from "@material-ui/core/Badge";
import { authAxiosCust } from "../../../App";

const SideBar = () => {
  const getId = localStorage.getItem("userId");
  const [toggle, setToggle] = useState(false);
  const [cust, setCust] = useState({});

  useEffect(() => {
    authAxiosCust
      .get(`api/customer/${getId}`)
      .then((res) => {
        setCust(res.data.Customer);
        // console.log(res.data.Customer);
      })
      .catch((err) => console.log(err));
  }, [getId]);

  const showSideBar = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="navbar_toggle">
        <div className="menu-bars">
          <FormatListBulletedRoundedIcon onClick={showSideBar} />
        </div>
      </div>
      <nav className={toggle ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items d-flex pr-4">
          <li className="nav-toggle">
            <div className="menu-bars mt-4" onClick={showSideBar}>
              <CloseIcon style={{ color: "white", transform: "scale(1.3)" }} />
            </div>
          </li>
          <div className="sidebar-list mt-4">
            <li
              onClick={() => (window.location = "settings")}
              style={{ cursor: "pointer" }}
            >
              My Account
            </li>
            <li>
              <AccountCircleIcon className="account-icon" />
            </li>
            <li>{cust.name} #121</li>

            <li className="mb-3" style={{ height: "60px" }}>
              <Badge className="mr-3" badgeContent={4} color="error" style={{}}>
                <NotificationsNoneIcon className=" text-white" />
              </Badge>
              Notifications
            </li>
            <li
              onClick={() => (window.location = "settings/savedmess")}
              style={{ cursor: "pointer" }}
            >
              <BookmarkBorderIcon className=" mr-3" />
              My Saved Mess
            </li>
            <li
              onClick={() => (window.location = "settings")}
              style={{ cursor: "pointer" }}
            >
              <SettingsIcon className=" mr-2" />
              Settings
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
