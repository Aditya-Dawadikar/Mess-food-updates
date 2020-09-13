import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Mess_user2 from "./Mess_user2";
import Mess_user3 from "./Mess_user3";
import Mess_user4 from "./Mess_user4";
import LeftSideList from "./LeftSideList";

const MessSettings = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <>
            <div className="Mess-Account d-flex">
              <LeftSideList />
              <Route exact path="/mess/settings" component={Mess_user2} />
              <Route path="/mess/mess-user-2" component={Mess_user2} />
              <Route path="/mess/mess-user-3" component={Mess_user3} />
              <Route path="/mess/mess-user-4" component={Mess_user4} />
            </div>
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default MessSettings;
