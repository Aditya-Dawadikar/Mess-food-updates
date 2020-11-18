import React, { useState } from "react";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("email :" + email);
    axios.post("api/forgotpassword/otp", {
      "role": "customer",
      "email": email,
    })
    .then(res=>{
        console.log(res);
    })
    .catch(err=> console.log(err));
  };

  return (
    <>
      <div className="forget_password">
        <h4>Email Address</h4>
        <h6 className="mt-5 mb-3">
          Enter Your Email Id to reset your password :
        </h6>
        <form autoComplete="on" onSubmit={onSubmit}>
          <div className="forget_pass_content">
            <input
              type="email"
              placeholder="Enter Your EmailID"
              name="email"
              className="py-2 mb-3"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button type="submit" className="my-3 bg-warning py-2">
              SEND
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
