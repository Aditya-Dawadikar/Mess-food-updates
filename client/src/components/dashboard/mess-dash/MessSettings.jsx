import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import EditProfile from "./EditProfile";
import MySavedMenu from "./MySavedMenu";
import AddMenu from "./AddMenu";
import EditMenu from "./EditMenu";
import LeftSideList from "./LeftSideList";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const MessSettings = () => {
  return (
    <>
      <NavLink
        to="/mess/dashboard"
        style={{
          color: "white",
          paddingLeft: "10px",
          paddingTop: "10px",
          textDecoration: "none",
        }}
      >
        <ArrowBackIcon
          className="arrow-icon mt-3 ml-2"
          style={{
            color: "#FFB800",
            transform: "scale(1.5)",
          }}
        />
      </NavLink>
      <BrowserRouter>
        <Switch>
          <>
            <div className="Mess-Account d-flex">
              <LeftSideList />
              <Route exact path="/mess/settings" component={EditProfile} />
              <Route
                path="/mess/settings/editprofile"
                component={EditProfile}
              />
              <Route
                path="/mess/settings/mysavedmenu"
                component={MySavedMenu}
              />
              <Route path="/mess/settings/addmenu" component={AddMenu} />
              <Route
                path="/mess/settings/editmenu/:menuId"
                component={EditMenu}
              />
            </div>
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default MessSettings;
