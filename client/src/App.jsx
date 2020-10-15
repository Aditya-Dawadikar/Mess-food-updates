import React from "react";
import SignUp from "./components/auth/customer/SignUp";
import Login from "./components/auth/customer/Login";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginM from "./components/auth/mess/Login";
import SignUpM from "./components/auth/mess/Signup";
import CustDashboard from "./components/dashboard/cust-dash/Customer.jsx";
import MessDashboard from "./components/dashboard/mess-dash/Mess.jsx";
import MessDetails from "./components/dashboard/cust-dash/MessDetails";
import MessSettings from "./components/dashboard/mess-dash/MessSettings";
import Settings from "./components/dashboard/cust-dash/Settings";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const token = localStorage.getItem("tokenMess");
const tokenCust = localStorage.getItem("token");

axios.defaults.baseURL = "http://localhost:9000/";

export const authAxiosMess = axios.create({
  baseURL: "http://localhost:9000/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const authAxiosCust = axios.create({
  baseURL: "http://localhost:9000/",
  headers: {
    Authorization: `Bearer ${tokenCust}`,
  },
});

const App = () => {
  return (
    <>
     <ToastContainer/>
      <BrowserRouter>
        <Switch>
        <>
          <Route exact path="/" component={Login} />

          {/* login and signup routes */}
          <Route path="/signup/customer" component={SignUp} />
          <Route path="/login/customer" component={Login} />
          <Route path="/login/mess" component={LoginM} />
          <Route path="/signup/mess" component={SignUpM} />

          {/* dashboard routes */}
          <Route path="/customer/dashboard" component={CustDashboard} />
          <Route path="/mess/dashboard" component={MessDashboard} />
          <Route path="/customer/mess-details/:messId" component={MessDetails} />

          {/* Mess and customer Settings Routes */}
          <Route path="/customer/settings" component={Settings} />
          <Route path="/mess/settings" component={MessSettings} />
          </>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
