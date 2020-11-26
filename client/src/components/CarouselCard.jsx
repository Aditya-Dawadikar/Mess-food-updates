import React, { useEffect, useState } from "react";
import food1 from "../imgs/food1.jpg";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsIcon from "@material-ui/icons/Directions";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { authAxiosCust } from "../App";
import { Card } from "react-bootstrap";
import { IoIosStar } from "react-icons/io";

const CarouselCard = (props) => {
  const [rating, setRating] = useState("");

  useEffect(() => {
    authAxiosCust
      .get(`/api/mess/${props.messId}`)
      .then((res) => {
        // console.log(res)
        setRating(res.data.Mess[0].Rating);
      })
      .catch((err) => console.log(err));
  });

  const displayStar = (star) => {
    return (
      <>
        {[...Array(star)].map(() => {
          return <IoIosStar fontSize={30} color="#FFB800" />;
        })}
      </>
    );
  };
  const LeftdisplayStar = (star) => {
    return (
      <>
        {[...Array(star)].map(() => {
          return <IoIosStar fontSize={30} color="grey" />;
        })}
      </>
    );
  };

  return (
    <>
      <div
        className="card bg-light text-black"
        style={{ height: "-webkit-fill-available", margin: "0 80px" }}
      >
        <img
          src={food1}
          className="card-img"
          id="carousel-card-img"
          alt="food1"
        />

        <div
          className="card-img-overlay "
          style={{ marginLeft: "30%", display: "flex" }}
        >
          <div className="card-title" style={{ width: "36%" }}>
            <div className="card-body">
              <h5 className="card-title mb-2" style={{ fontSize: "2rem" }}>
                {props.mess} <VerifiedUserIcon className=" text-success" />
              </h5>
              <Card.Text as="div">
                <div className="">
                  {displayStar(Math.ceil(rating))}
                  {LeftdisplayStar(5 - Math.ceil(rating))}
                </div>
              </Card.Text>
              <p className="card-text text-dark mt-4">
                Chinese,FastFood,North ....
              </p>
              <div className="d-flex mt-4">
                <LocationOnIcon
                  className=" mt-2"
                  style={{ color: "#FF4D00", transform: "scale(1.5)" }}
                />
                <span className="ml-3">
                  {props.address}
                  <p className=" d-block">
                    5 km from Pccoe
                    <DirectionsIcon
                      className="ml-1"
                      style={{ color: "#FFB800" }}
                    />
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div
            className="card-text"
            style={{ width: "35%", textAlign: "-webkit-center" }}
          >
            <h5 className="mb-4 mt-4">Today's Special</h5>
            <table id="customers">
              <tbody>
                {props.menuItem.map((item) => (
                  <tr key={item._id}>
                    <td>{item.itemName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="card-text price-tag mt-5"
            style={{ width: "29%", color: "#FF4D00", textAlign: "center" }}
          >
            <h1
              className="d-block"
              style={{ color: "#FF4D00", transform: "scale(1.2)" }}
            >
              {props.price}
            </h1>
            <h4 className="d-flex" style={{ justifyContent: "center" }}>
              INR
              <LocalOfferIcon
                className=" ml-2"
                style={{ color: "#FFB800", transform: "scale(1.2)" }}
              />
            </h4>

            <button
              type="button"
              className="btn btn-warning text-white w-50 mt-2"
              style={{ transform: "scale(1.3)" }}
              onClick={() =>
                (window.location = `/customer/mess-details/${props.messId}`)
              }
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
