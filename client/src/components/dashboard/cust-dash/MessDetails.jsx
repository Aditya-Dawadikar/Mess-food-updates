import React, { useEffect, useState } from "react";
import food1 from "../../../imgs/food1.jpg";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsIcon from "@material-ui/icons/Directions";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { NavLink, useParams } from "react-router-dom";
import { authAxiosCust } from "../../../App";

function MessDetails() {
  const { messId } = useParams();
  const [mess, setMess] = useState({
    messName: "",
    address: "",
    menuList: [],
  });

  useEffect(() => {
    authAxiosCust
      .get(`/api/mess/${messId}`)
      .then((res) => {
        console.log(res.data);
        setMess({
          messName: res.data.Mess[0].messDetails.messName,
          menuList: res.data.Mess[0].MenuList,
          address: res.data.Mess[0].messDetails.address,
        });
      })
      .catch((err) => console.log(err));
  }, [messId]);
  return (
    <>
      <NavLink
        to="/customer/dashboard"
        style={{ color: "white", textDecoration: "none" }}
      >
        <ArrowBackIcon
          className="mt-4 ml-4"
          style={{ transform: "scale(1.5)", color: "#FFB800" }}
        />
      </NavLink>
      <div className="containerDetails">
        <div className="card mess-card mr-4">
          <div className="row">
            <div className="col-md-4" style={{ backgroundColor: "#FFF8DE" }}>
              <img src={food1} className="card-img" id="mess-pic" alt="food1" />
            </div>
            <div
              className="col-md-8 mess-info"
              style={{ backgroundColor: "#FFF8DE" }}
            >
              <div className="d-flex justify-content-between">
                <h1 style={{ color: "#FFB800" }}>
                  {mess.messName} <VerifiedUserIcon className=" text-success" />
                </h1>
                <BookmarkBorderIcon
                  className="text-warning mx-3 my-2"
                  style={{ transform: "scale(1.8)", cursor: "pointer" }}
                />
              </div>
              <div className="starIcon" style={{ color: "#FFB800" }}>
                <GradeRoundedIcon style={{ transform: "scale(1.5)" }} />
                <GradeRoundedIcon
                  style={{ transform: "scale(1.5)", marginLeft: "8px" }}
                />
                <GradeRoundedIcon
                  style={{ transform: "scale(1.5)", marginLeft: "8px" }}
                />
                <GradeRoundedIcon
                  style={{ transform: "scale(1.5)", marginLeft: "8px" }}
                />
              </div>
              <p
                className="h2 mess-info-cuisine"
                style={{
                  color: "#B0A7A7",
                  fontWeight: "lighter",
                  paddingTop: "7px",
                }}
              >
                Chinese,FastFoood,North Asia Food
              </p>
              <div
                className="h4 mess-info-address"
                style={{ paddingTop: "7px" }}
              >
                <LocationOnIcon
                  style={{ color: "#FF4D00", transform: "scale(1.5)" }}
                />
                <span>{mess.address}</span>
                <p className="ml-4" style={{ marginTop: "5px" }}>
                  <span>5 km from Pccoe</span>
                  <DirectionsIcon style={{ color: "#FFB800" }} />
                </p>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "#FFF8DE" }}>
            {mess.menuList.map((item) => {
              return (
                <ul className="col sm-12 mess-menus d-flex" key={item._id}>
                <li className="d-flex">
                  {item.menuItem.map((idx) => {
                    return (
                      <h6 className="mr-2" key={idx._id}>
                        {idx.itemName}
                      </h6>
                    );
                  })}
                  <img
                    src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                    alt="veg"
                  />
                  </li>
                  <li style={{ color: "#FF5C00" }} className="font-weight-bold">{item.price} INR</li>
                  <li>{item.tag[0]}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MessDetails;
