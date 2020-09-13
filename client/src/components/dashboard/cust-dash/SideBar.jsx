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
      {/* <div className="navbar-brand"> */}
        <div className="navbar_toggle">
          <div className="menu-bars">
            <FormatListBulletedRoundedIcon onClick={showSideBar} />
          </div>
        </div>
        <nav className={toggle ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" >
            <li className="nav-toggle" onClick={showSideBar}>
              <div className="menu-bars mt-4">
                <CloseIcon style={{ color: "white" , transform:"scale(1.3)" }} />
              </div>
            </li>
            {/* {SideBarInfo.map((item, index) =>{
             return (
              <li key={index} className={item.name}>
                  <Link to={item.path}>
                      {item.icons}
                      {item.title}
                  </Link>
              </li>
             );
          })} */}
            <div className="sidebar-list">
              <li>My Account</li>
              <li>
                <AccountCircleIcon className="account-icon"/>
              </li>
              <li>Aditya Dawadikar #121</li>
              <li style={{height:"60px"}}>
              <Badge badgeContent={4} color="error" style={{}}>
              <NotificationsNoneIcon className=" text-white mr-3"/>
              </Badge>
                {/* <NotificationsNoneIcon className=" mr-3"/> */}
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
      {/* </div> */}
    </>
  );
};

export default SideBar;
