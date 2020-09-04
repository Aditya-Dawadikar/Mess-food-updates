import React from "react";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsIcon from "@material-ui/icons/Directions";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { NavLink } from "react-router-dom";


const MessCard = (props) => {
  return (
    <>
      <div className="card mb-3 mr-3" style={{ maxWidth: "475px" , backgroundColor:"#FFF8DE"}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={props.messImg}
              className="card-img pt-2 pl-2"
              style={{ height: "160px" , borderRadius:"10px" }}
              alt="food1"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" style={{ color: "#FFB800" }}>
                {props.messName} <VerifiedUserIcon className=" text-success" />
              </h5>
              <div style={{ color: "#FFB800" }}>
                <GradeRoundedIcon />
                <GradeRoundedIcon />
                <GradeRoundedIcon />
                <GradeRoundedIcon />
              </div>
              <p className="card-text text-dark mt-2">Chinese,FastFoood,North India....</p>
              <div className=" d-flex">
              <LocationOnIcon
                  className=" mt-2"
                  style={{ color: "#FF4D00", transform: "scale(1.5)" ,cursor:"pointer" }}
                />
                <span className="ml-1">
                  {props.messAdd}
                  <p className=" d-block">
                    5 km from Pccoe
                    <DirectionsIcon
                      className="ml-1"
                      style={{ color: "#FFB800" }}
                    />
                  </p>
                </span>
              </div>
              <div className="d-flex justify-content-between" style={{alignItems:"center"}}>
              <NavLink to='/customer/mess-details'>
                <button type="button" className="btn btn-warning text-white " style={{ width:"8rem" }}> 
                View
                </button>
              </NavLink>  
                <BookmarkBorderIcon
                  className="d-flex mr-1"
                  style={{ color: "#FFB800" ,transform:"scale(1.2)",cursor:"pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessCard;
