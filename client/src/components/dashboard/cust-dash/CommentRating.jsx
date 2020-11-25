import React, { useState } from "react";
import Avatar from "react-avatar";
import ReactStars from "react-rating-stars-component";
import { IoIosStar } from "react-icons/io";
import Zoom from "react-reveal";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import ReplyIcon from '@material-ui/icons/Reply';
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { authAxiosCust } from "../../../App";
import { useEffect } from "react";
import axios from "axios";


const CommentRating = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "60%",
      height: "70%",
      transform: "translate(-50%, -50%)",
      border: "0.5px solid black",
      boxShadow: "0 3px 50px rgba(2, 2, 2, 5)",
    },
  };
  const { messId } = useParams();
  const custId = localStorage.getItem("userId");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState([]);

  // let date = new Date(dateString);
  // var timeStamp = parseInt((new Date('2020/10/12').getTime() / 1000).toFixed(0))
  // console.log(timeStamp);
  // let unix_timestamp = 1602493580;
  // var date = new Date(unix_timestamp * 1000);
  // var year = date.getFullYear();
  // var mon = date.getMonth() + 1;
  // var day = date.getDate();
  // if (day < 10) day = "0" + day;
  // if (mon < 10) mon = "0" + mon;

  // var formattedTime = year + ":" + mon + ":" + day;

  // console.log(formattedTime);
  useEffect(() => {
    authAxiosCust
      .get(`/api/mess/${messId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [messId]);

  useEffect(() => {
    axios
      .get(`/api/rating/all/${messId}`)
      .then((res) => {
        console.log(res.data);
        setReview(res.data.reviews);
      })
      .catch((err) => console.log(err));
  }, [messId]);

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
  const ratingChanged = (newRating) => {
    setRating(newRating);
    // console.log(newRating);
  };

  const timeSplit = (time)=>{
    let new_value = time.split("T")[0];
    return new_value;
  }

  const onSubmit = () => {
    console.log(comment);
    console.log(rating);
    var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth() + 1;
    // var yyyy = today.getFullYear();
    // if (dd < 10) dd = "0" + dd;
    // if (mm < 10) mm = "0" + mm;
    // today = yyyy + "/" + mm + "/" + dd;
    // var timeStamp = parseInt((new Date(today).getTime() / 1000).toFixed(0));
    // console.log(timeStamp);
    authAxiosCust
      .post(`/api/rating/new/review/${custId}/${messId}`, {
        rating: rating,
        comment: comment,
        timestamp: today,
      })
      .then((res) => {
        console.log(res);
        toast.success("Thankyou for your feedback");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        style={{
          borderRadius: "20px",
          marginLeft: "40px",
          marginBottom: "20px",
          border: "none",
          outline: "none",
        }}
        onClick={() => setIsOpen(true)}
      >
        <span className="text-white justify-content-center align-items-center">
          Rate us
        </span>
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <Zoom>
          <CancelIcon
            className="d-block"
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(false)}
          />
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h4 className="font-weight-bold mb-5 text-warning">
              Did You Love It ? Let Us Know
            </h4>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
              }}
            >
              <ReactStars
                count={5}
                size={35}
                // isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#FEC200"
                onChange={ratingChanged}
                style={{
                  border: "none",
                  outline: "none",
                }}
              />
            </div>
            <h6 className="my-4"> Add a Comment</h6>
            <div className="form-group justify-content-center d-flex ">
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Comment..."
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={{
                  height: "100px",
                  maxWidth: "50%",
                  borderRadius: "20px",
                  border: "1px solid black",
                  outline: "none",
                }}
              />
            </div>
            <Button
              variant="contained"
              style={{
                borderRadius: "20px",
                border: "none",
                outline: "none",
                backgroundColor: "#FFB800",
                margin: "20px 0",
              }}
              onClick={onSubmit}
            >
              <span className="text-white justify-content-center align-items-center">
                Submit
              </span>
            </Button>
          </div>
        </Zoom>
      </Modal>
      {/* <h6 className="ml-5 text-danger font-weight-bolder">Rate Us</h6> */}
      <Zoom>
        <div className="justify-content-center align-items-center mx-5">
          {review.map((idx) => {
            return (
              <ul
                className="col sm-12 comment_section d-flex"
                key={idx._id}
                style={{
                  backgroundColor: "#f1f1f1",
                }}
              >
                {/* <Avatar name={idx.customerName} className="text-white" size="50" round={true} /> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "20px",
                    position:"relative",
                  }}
                >
                  <div className="my-2 d-flex">
                    {displayStar(idx.rating)}
                    {LeftdisplayStar(5 - idx.rating)}
                    {idx.thread.map((item) => {
                      return (
                        <h6 style={{
                        position: "absolute",
                        right: "10px",
                        marginTop: "5px",
                        color: "#f50057",
                        // fontFamily:"'Castoro', serif"
                      }}
                    >
                    {timeSplit(item.timestamp)}
                    </h6>
                      );
                    })}
                  </div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "700px",
                      padding: "0 10px",
                      borderRadius: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    {idx.thread.map((item) => {
                      return (
                        <p className="mt-2" key={item._id}>
                          {item.comment}
                        </p>
                      );
                    })}
                  </div>
                  <h6 style={{
                        color: "#f50057",
                        marginTop: "5px",
                        fontFamily:"'Castoro', serif"
                      }}
                    >
                      ~ by {idx.customerName}
                    </h6>
                  <div className="mb-1" style={{
                    position:"absolute",
                    right:"20px",
                    bottom:"0"
                  }} 
                  >
                  <ReplyIcon/><span className="ml-2 " style={{
                    fontFamily:"'Castoro', serif",
                    cursor:"pointer",
                    }}>Reply</span>
                  <span className="ml-4" style={{fontFamily:"'Castoro', serif",cursor:"pointer",}}>Delete</span>
                  </div>
                </div>
              </ul>
            );
          })}
        </div>
      </Zoom>
    </>
  );
};

export default CommentRating;
