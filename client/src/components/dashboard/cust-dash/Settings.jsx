import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import LeftSide from "./LeftSide";
import EditProfile from "./EditProfile";
import SavedMess from "./SavedMess";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Settings = () => {
  return (
    <>
      <NavLink
        to="/customer/dashboard"
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
            <div className="settings-container d-flex">
              <LeftSide />
              <Route exact path="/customer/settings" component={EditProfile} />
              <Route
                path="/customer/settings/savedmess"
                component={SavedMess}
              />
            </div>
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Settings;
