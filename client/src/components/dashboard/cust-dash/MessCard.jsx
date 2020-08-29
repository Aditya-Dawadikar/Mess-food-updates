import React from "react";
import food1 from "../../../imgs/food1.jpg";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsIcon from "@material-ui/icons/Directions";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const MessCard = () => {
  return (
    <>
      <div class="card mb-3 mr-3" style={{ maxWidth: "500px" }}>
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src={food1}
              class="card-img"
              style={{ height: "175px" }}
              alt="food1"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style={{ color: "#FFB800" }}>
                Surya Mess <VerifiedUserIcon className=" text-success" />
              </h5>
              <div style={{ color: "#FFB800" }}>
                <GradeRoundedIcon />
                <GradeRoundedIcon />
                <GradeRoundedIcon />
                <GradeRoundedIcon />
              </div>
              <p class="card-text text-dark">Chinese,FastFoood,North ....</p>
              <div>
                <LocationOnIcon style={{ color: "#FF4D00" }} />
                Krushna Chowk, Akurdi
                <p>
                  5 km from Pccoe
                  <DirectionsIcon style={{ color: "#FFB800" }} />
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" class="btn btn-warning text-white w-25">
                View
                </button>
                <BookmarkBorderIcon
                  className="d-flex ml-5"
                  style={{ color: "#FFB800" }}
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
