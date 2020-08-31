import React from "react";
import food1 from "../../../imgs/food1.jpg";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsIcon from "@material-ui/icons/Directions";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

const CarouselCard = () => {
  return (
    <>
      <div
        className="card bg-light text-black"
        style={{ height: "-webkit-fill-available" }}
      >
        <img src={food1} className="card-img" id="carousel-card" alt="food1" />
        <div
          className="card-img-overlay "
          style={{ marginLeft: "30%", display: "flex" }}
        >
          <div className="card-title" style={{ width: "33%" }}>
            <div class="card-body">
              <h5 class="card-title" style={{ color: "#FFB800" }}>
                Surya Mess <VerifiedUserIcon className=" text-success" />
              </h5>
              <div style={{ color: "#FFB800"}}>
                <GradeRoundedIcon />
                <GradeRoundedIcon/>
                <GradeRoundedIcon/>
                <GradeRoundedIcon />
              </div>
              <p class="card-text text-dark">Chinese,FastFoood,North ....</p>
              <div>
                <LocationOnIcon
                  style={{ color: "#FF4D00", transform: "scale(1.5)" }}
                />
                Krushna Chowk, Akurdi
                <p className="ml-4">
                  5 km from Pccoe
                  <DirectionsIcon style={{ color: "#FFB800" }} />
                </p>
              </div>
            </div>
          </div>
          <div className="card-text" style={{ width: "33%" }}>
            <h5 className="mb-5">Today's Special</h5>
            <p>
              Special bhaji<span className="text-secondary mx-4">1bowl</span>{" "}
              7INR
            </p>
            <p>
              Daal <span className="text-secondary mx-5">1bowl</span> 7INR
            </p>
            <p>
              Rice <span className="text-secondary mx-5">1bowl</span> 10INR
            </p>
            <p>
              Roti <span className="text-secondary mx-5">5</span> 12INR
            </p>
          </div>
          <div
            className="card-text price-tag mt-5"
            style={{ width: "33%", color: "#FF4D00" }}
          >
            <h2>60 INR</h2>
            <LocalOfferIcon
              className="mx-3 my-3 d-block"
              style={{ color: "#FFB800", transform: "scale(2)" }}
            />
            <button type="button" class="btn btn-warning text-white w-50">
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
