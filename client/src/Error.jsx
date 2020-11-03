import React from "react";
import foodError from "./imgs/donut1.png";
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp';

const Error = () => {
  return (
    <>
      <div
        className=" container Error-Page"
        style={{ alignItems: "center" }}
      >
        <div className="text-danger">
          <div
            className="food-error"
            style={{ width: "500px", height: "200px" ,fontSize: "12rem"}}
          >
            <span className="mr-2 Error_Number">4 </span>
            <img src={foodError} alt="food-error" />
            <span className="ml-2 Error_Number">4</span>
          </div>
          <br />
          <span className="text-danger font-weight-bolder" style={{fontSize: "2rem"}}>
          <button className="mr-2 back_arrow" onClick={()=>window.location="/customer/dashboard"}><ArrowBackSharpIcon/></button>
           ... ERROR PAGE NOT FOUND</span>
        </div>
      </div>
    </>
  );
};

export default Error;
