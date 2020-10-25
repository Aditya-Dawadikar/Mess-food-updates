import React, { useEffect, useState } from "react";
import img1 from "../../../imgs/food1.jpg";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsIcon from "@material-ui/icons/Directions";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { authAxiosCust } from "../../../App";
import Loader from "react-loader-spinner";

const SavedMess = () => {
  const custId = localStorage.getItem("userId");
  const [loading, setLoading] = useState(true);
  const [mess, setMess] = useState([]);
  useEffect(() => {
    authAxiosCust
      .get(`api/customer/features/savedmess/${custId}`)
      .then((res) => {
        console.log(res);
        setMess(res.data.doc);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [custId]);

  return (
    <div className="container" style={{ width: "65%", marginTop: "20px" }}>
      {loading ? (
        <Loader
          type="ThreeDots"
          color="#FFB800"
          height="100"
          width="100"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ) : (
        mess.map((idx) => {
          return (
            <div
              className="card mb-3 mr-3"
              style={{ maxWidth: "600px", borderRadius: "20px" }}
              key={idx._id}
            >
              <div className="row no-gutters">
                <div className="col-md-4" style={{ width: "40%" }}>
                  <img
                    src={img1}
                    className="card-img" //pt-2 pl-2
                    style={{ height: "100%" }}
                    alt="food1"
                  />
                </div>
                <div className="col-md-8" style={{ width: "60%" }}>
                  <div className="card-body ml-4" style={{ width: "80%" }}>
                    <h5 className="card-title" style={{ color: "#FFB800" }}>
                      {idx.messDetails.messName}
                      <VerifiedUserIcon className="ml-2 text-success" />
                    </h5>
                    <div style={{ color: "#FFB800" }}>
                      <GradeRoundedIcon />
                      <GradeRoundedIcon />
                      <GradeRoundedIcon />
                      <GradeRoundedIcon />
                    </div>
                    <p className="card-text text-dark mt-2">
                      Chinese,FastFoood,North India....
                    </p>
                    <div className=" d-flex">
                      <LocationOnIcon
                        className=" mt-2"
                        style={{
                          color: "#FF4D00",
                          transform: "scale(1.5)",
                          cursor: "pointer",
                        }}
                      />
                      <span className="ml-1">
                        {idx.messDetails.address}
                        <p className=" d-block">
                          5 km from Pccoe
                          <DirectionsIcon
                            className="ml-1"
                            style={{ color: "#FFB800" }}
                          />
                        </p>
                      </span>
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ alignItems: "center" }}
                    >
                      <button
                        type="button"
                        className="btn btn-warning text-white "
                        style={{ width: "8rem" }}
                        onClick={() =>
                          (window.location = `/customer/mess-details/${idx._id}`)
                        }
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SavedMess;
