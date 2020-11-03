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
import Error from "./Error.jsx";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import SavedMess from "./components/dashboard/cust-dash/SavedMess";

const token = localStorage.getItem("tokenMess");
const tokenCust = localStorage.getItem("token");
// const refreshToken = localStorage.getItem("refreshToken");
// const CustId = localStorage.getItem("userId");

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

authAxiosCust.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    console.log(originalRequest);
    if (error.response.status === 401 && !originalRequest._retry) {
      console.log("expired");
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenMess");
      localStorage.removeItem("userIdMess");
      localStorage.removeItem("refreshToken");
      window.location = "/login/customer";
      // originalRequest._retry = true;
      // axios
      //   .post("api/refresh/customer", {
      //     headers: {
      //       Authorization: `Bearer ${refreshToken}`,
      //     },
      //     body: {
      //       email: "geekdev127001@gmail.com",
      //       userId: CustId,
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     console.log("response ouptut")
      // localStorage.setItem("refreshToken", res.data.token.refreshToken);

      // axios.defaults.headers.common["Authorization"] =
      //   "Bearer " + localStorage.getItem("refreshToken");

      // return axios(originalRequest);
      // })
      // .catch((err) => console.log("some error in refresh token"));
    }
  }
);

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />

          {/* Login and Signup Routes */}
          <Route exact path="/signup/customer" component={SignUp} />
          <Route exact path="/login/customer" component={Login} />
          <Route exact path="/login/mess" component={LoginM} />
          <Route exact path="/signup/mess" component={SignUpM} />

          {/* DashBoard Routes */}
          <Route exact path="/customer/dashboard" component={CustDashboard} />
          <Route exact path="/mess/dashboard" component={MessDashboard} />
          <Route
            exact
            path="/customer/mess-details/:messId"
            component={MessDetails}
          />

          {/* Mess and customer Settings Routes */}
          <Route exact path="/customer/settings" component={Settings} />
          <Route exact path="/mess/settings" component={MessSettings} />
          <Route path="/customer/settings/savedmess" component={Settings} />
          <Route path="/mess/settings/editmenu/:menuId" component={MessSettings} />

          {/* Error Route*/}
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
