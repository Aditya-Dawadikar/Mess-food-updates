import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [reset, setReset] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;

    setReset((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(reset);
    axios.post("api/forgotpassword/password/customer", {
      "email":"geekdev127001@gmail.com",
      "password":"12345"
    })
    .then(res=>{
        console.log(res);
    })
    .catch(err => {
      console.log(err);
      toast.error("Error in reseting the password");
    });
  };

  return (
    <>
      <div className="forget_password">
        <h3 className="mb-3">Reset Your Password</h3>
        {/* <h6 className="my-4">Check your registered email for the OTP</h6> */}
        <form autoComplete="on" onSubmit={onSubmit}>
          <div className="forget_pass_reset">
            <div className="d-flex my-2 reset_section">
              <h6 className="ml-5">Email</h6>
              <input
                type="email"
                placeholder="Enter the email id"
                name="email"
                className="py-2"
                onChange={changeHandler}
                value={reset.email}
              />
            </div>
            <div className="d-flex my-3 reset_section">
              <h6 className="ml-5">Password</h6>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="py-2"
                onChange={changeHandler}
                value={reset.password}
              />
            </div>
            <div className="d-flex my-2 reset_section">
              <h6 className="ml-5">Confirm Password</h6>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                className="py-2"
                onChange={changeHandler}
                value={reset.confirmPassword}
              />
            </div>
            <button type="submit" className="my-3 bg-warning py-2">
              RESET
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
