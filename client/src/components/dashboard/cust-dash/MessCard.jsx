import React, { useState } from "react";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsIcon from "@material-ui/icons/Directions";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { NavLink, Route } from "react-router-dom";
import { authAxiosCust } from "../../../App";
import { toast } from "react-toastify";

const MessCard = (props) => {
  const custId = localStorage.getItem("userId");
  const [subscribe, setSubscribe] = useState(false);
  const [mess, setMess] = useState([]);

  function findSubscriptionId(arr1, arr2) {
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
      if (!obj[arr1[i]]) {
        const element = arr1[i];
        obj[element] = element;
      }
    }
    for (let j = 0; j < arr2.length; j++) {
      if (obj[arr2[j]]) {
        return obj[arr2[j]];
      }
    }
  }
  //time complexity : length of array1 + length of array2

  const subscribeMess = () => {
    authAxiosCust
      .post(`api/subscription/subscribe/${custId}/${props.messId}`)
      .then(() => toast.success("bookmarked"))
      .catch(() => toast.error("something went wrong"));

    setSubscribe((prev) => !prev);
  };

  const unsubscribeMess = () => {

    authAxiosCust
      .get(`/api/mess/${props.messId}`)
      .then((res) => {
        console.log(res);
        setMess(res.data.Mess[0].subscribers);
        // console.log(res.data.Mess[0].subscribers);
      })
      .catch((err) => console.log(err));

    authAxiosCust
      .get(`api/customer/${custId}`)
      .then((res) => {
        console.log(res.data.Customer.savedMess);
        const subId = findSubscriptionId(res.data.Customer.savedMess, mess);
        authAxiosCust
          .delete(`api/subscription/unsubscribe/${subId.subscriptionId}`)
          .then((res) => {
            console.log(res);
            toast.success("Unbookmarked");
          })
          .catch(() => toast.error("something went wrong"));
      })
      .catch((err) => console.log(err));

    setSubscribe((prev) => !prev);
  };

  const BookmarkedButton = () => {

    authAxiosCust
        .get(`api/customer/features/savedmess/${custId}`)
        .then((res) => {
          // console.log(res);
          res.data.doc.find((val) => val._id === props.messId)
            ? setSubscribe(true)
            : setSubscribe(false);
        })
        .catch((err) => console.log(err));

    return subscribe === false ? (
      <BookmarkBorderIcon
        className="text-warning d-flex mr-1"
        style={{ transform: "scale(1.2)", cursor: "pointer" }}
        onClick={() => subscribeMess()}
      />
    ) : (
      <BookmarkIcon
        className="text-warning d-flex mr-1"
        style={{ transform: "scale(1.2)", cursor: "pointer" }}
        onClick={() => unsubscribeMess()}
      />
    );
  };

  return (
    <>
      <div
        className="card mb-3 mr-3"
        style={{ maxWidth: "475px", backgroundColor: "#FFF8DE" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={props.messImg}
              className="card-img pt-2 pl-2"
              style={{ height: "160px", borderRadius: "10px" }}
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
              <div
                className="d-flex justify-content-between"
                style={{ alignItems: "center" }}
              >
                <NavLink to={`/customer/mess-details/${props.messId}`}>
                  <button
                    type="button"
                    className="btn btn-warning text-white "
                    style={{ width: "8rem" }}
                  >
                    View
                  </button>
                </NavLink>
                <Route
                  path="/customer/dashboard"
                  component={BookmarkedButton}
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
