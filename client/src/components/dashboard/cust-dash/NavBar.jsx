import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import SideBar from "./SideBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Account from "../mess-dash/Account";
import { authAxiosCust } from "../../../App";

const NavBar = ({ searchMess }) => {
  const [mess, setMess] = useState([]);
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchMess(mess);
    setQuery("");
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
    authAxiosCust
      .get(`api/search/mess?mess=${e.target.value}`)
      .then((res) => {
        console.log(res.data.doc);
        setMess(res.data.doc);
        searchMess(res.data.doc);
      })
      .catch((err) => console.log(err));
  };

  function logout() {
    //remove tokens and userId...
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenMess");
    localStorage.removeItem("userIdMess");
  }

  return (
    <>
      <nav className="navbar navbar-fixed-top mt-3">
        <BrowserRouter>
          <Switch>
            <>
              <div className="text-warning" style={{ padding: "15px" }}>
                <Route path="/customer/dashboard" component={SideBar} />
                <Route path="/mess/dashboard" component={Account} />
              </div>
            </>
          </Switch>
        </BrowserRouter>
        <form
          className="form-inline mx-auto"
          style={{ width: "435px" }}
          onSubmit={onSubmit}
        >
          <input
            className="form-control rounded-pill w-75"
            style={{ border: "1.5px solid" }}
            type="search"
            placeholder="Search Mess..."
            aria-label="Search"
            value={query}
            onChange={handleChange}
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
