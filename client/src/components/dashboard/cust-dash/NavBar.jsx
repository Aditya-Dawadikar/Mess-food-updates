import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SideBar from "./SideBar";

const NavBar = () => {

  const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
  useEffect(()=>{
    if(!localStorage.getItem('token'))
    window.location = "/login/customer"
  },[])
  return (
    <>
      <nav className="navbar navbar-fixed-top mt-3">
            <SideBar />
        {/* <BrowserRouter>
          <Switch>
          <Route path="/"/>
          </Switch>
        </BrowserRouter> */}
        <form className="form-inline mx-auto" style={{ width: "435px" }}>
          <input
            className="form-control rounded-pill w-75"
            style={{border: "1.5px solid" }}
            type="search"
            placeholder="Search Mess..."
            aria-label="Search"
          />
          <button className="btn btn-warning ml-2 " type="submit">
            <BiSearchAlt className=" text-white" style={{ transform: "scale(1.5)"}} />
          </button>
          <button className="btn btn-warning text-white logout" onClick={logout}>
            Logout
          </button>
        </form>
      </nav>
    </>
  );
};

export default NavBar;
