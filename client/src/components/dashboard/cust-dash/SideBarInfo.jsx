import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SettingsIcon from "@material-ui/icons/Settings";

export const SideBarInfo = [
  {
    title: "My-Account",
    path: "/settings",
    icons: "",
    name: "nav-text",
  },
  {
    title: "Contact-icon",
    path: "/setttings",
    icons: <AccountCircleIcon />,
    name: "nav-text",
  },
  {
    title: "Aditya Dawadikar",
    path: "/setttings",
    icons: "",
    name: "nav-text",
  },
  {
    title: "Notifications",
    path: "/setttings",
    icons: <NotificationsNoneIcon />,
    name: "nav-text",
  },
  {
    title: "My Saved Mess",
    path: "/setttings",
    icons: <BookmarkBorderIcon />,
    name: "nav-text",
  },
  {
    title: "Settings",
    path: "/setttings",
    icons: <SettingsIcon />,
    name: "nav-text",
  },
];
