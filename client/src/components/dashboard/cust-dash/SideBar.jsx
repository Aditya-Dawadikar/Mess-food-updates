import React, { useState } from "react";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SettingsIcon from "@material-ui/icons/Settings";
import Badge from '@material-ui/core/Badge';

const SideBar = () => {
  const [toggle, setToggle] = useState(false);

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
          <ul className="nav-menu-items d-flex pr-4" >
            <li className="nav-toggle" >
              <div className="menu-bars mt-4" onClick={showSideBar}>
                <CloseIcon style={{ color: "white" , transform:"scale(1.3)" }} />
              </div>
            </li>
            <div className="sidebar-list mt-4">
              <li>My Account</li>
              <li>
                <AccountCircleIcon className="account-icon"/>
              </li>
              <li>Aditya Dawadikar #121</li>
              
              <li style={{height:"60px"}}>
              <Badge className="mr-3" badgeContent={4} color="error" style={{}}>
              <NotificationsNoneIcon className=" text-white"/>
              </Badge>
                Notifications
              </li>
              <li>
                <BookmarkBorderIcon className=" mr-3"/>
                My Saved Mess
              </li>
              <li>
                <SettingsIcon className=" mr-2"/>
                Settings
              </li>
            </div>
          </ul>
        </nav>
    </>
  );
};

export default SideBar;
