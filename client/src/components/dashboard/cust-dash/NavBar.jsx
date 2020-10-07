import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SideBar from "./SideBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Account from "../mess-dash/Account";

const NavBar = () => {
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenMess");
    localStorage.removeItem("userIdMess");
  }
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) window.location = "/login/customer";
  //   if (!localStorage.getItem("tokenMess")) window.location = "/login/mess";
  // }, []);
  return (
    <>
      <nav className="navbar navbar-fixed-top mt-3">
        <BrowserRouter>
          <Switch>
            <>
              <div className="text-warning" style={{padding:"15px"}}>
                <Route path="/customer/dashboard" component={SideBar} />
                <Route path="/mess/dashboard" component={Account} />
              </div>
            </>
          </Switch>
        </BrowserRouter>
        <form className="form-inline mx-auto" style={{ width: "435px" }}>
          <input
            className="form-control rounded-pill w-75"
            style={{ border: "1.5px solid" }}
            type="search"
            placeholder="Search Mess..."
            aria-label="Search"
          />
          <button className="btn btn-warning ml-2 " type="submit">
            <BiSearchAlt
              className=" text-white"
              style={{ transform: "scale(1.5)" }}
            />
          </button>
          <button
            className="btn btn-warning text-white logout"
            onClick={logout}
          >
            Logout
          </button>
        </form>
      </nav>
    </>
  );
};

export default NavBar;
