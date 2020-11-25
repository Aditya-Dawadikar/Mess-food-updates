import React, { useState } from "react";
import Avatar from "react-avatar";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import Zoom from "react-reveal";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { authAxiosCust } from "../../../App";
import { useEffect } from "react";

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
  // let date = new Date(dateString);
  // var timeStamp = parseInt((new Date('2020/10/12').getTime() / 1000).toFixed(0))
  // console.log(timeStamp);
  let unix_timestamp = 1602493580;
  var date = new Date(unix_timestamp * 1000);
  var year = date.getFullYear();
  var mon = date.getMonth() + 1;
  var day = date.getDate();
  if (day < 10) day = "0" + day;
  if (mon < 10) mon = "0" + mon;

  // var formattedTime = year + ":" + mon + ":" + day;

  // console.log(formattedTime);
  useEffect(() => {
    authAxiosCust
      .get(`/api/rating/all/${messId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function displayStar() {
    return (
      <>
        {[...Array(5)].map(() => {
          return <FaStar />;
        })}
      </>
    );
  }
  const ratingChanged = (newRating) => {
    if (newRating === 5) setRating(newRating * 0.2);
    else setRating((newRating * 0.2).toFixed(1));
    // console.log(newRating);
  };

  const onSubmit = () => {
    console.log(comment);
    console.log(rating);
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    today = yyyy + "/" + mm + "/" + dd;
    var timeStamp = parseInt((new Date(today).getTime() / 1000).toFixed(0));
    console.log(timeStamp);
    authAxiosCust
      .post(`/api/rating/new/review/${custId}/${messId}`, {
        rating: rating,
        comment: comment,
        timestamp: timeStamp,
      })
      .then((res) => {
        console.log(res);
        toast.success("Thankyou for your feedback");
        window.location = `/customer/mess-details/${messId}`;
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
                marginTop: "20px",
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
          <ul className="col sm-12 comment_section d-flex px-3">
            <Avatar name="Vrushabh Kulye" size="50" round={true} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
              }}
            >
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={35}
                // isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#FEC200"
                classNames="d-block"
              />
              <p
                style={{
                  backgroundColor: "#FDFF90",
                  width: "700px",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                1st comment
                {displayStar()}
                {/* <Route
                          path={`/customer/mess-details/${messId}`}
                          component={displayStar}
                        /> */}
              </p>
            </div>
          </ul>
          <ul className="col sm-12 comment_section d-flex px-3">
            <Avatar name="Mallikarjun ople" size="50" round={true} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
              }}
            >
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                // color="red"
                size={35}
                // isHalf={true}
                // emptyIcon={<i className="far fa-star"></i>}
                // halfIcon={<i className="fa fa-star-half-alt"></i>}
                // fullIcon={<i className="fa fa-star"></i>}
                activeColor="#FEC200"
                classNames="d-block"
              />
              <p
                style={{
                  backgroundColor: "#FDFF90",
                  width: "700px",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                2nd comment
              </p>
            </div>
          </ul>
          <ul className="col sm-12 comment_section d-flex px-3">
            <Avatar name="jagtap thik" size="50" round={true} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
              }}
            >
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={35}
                // isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#FEC200"
                classNames="d-block"
              />
              <p
                style={{
                  backgroundColor: "#FDFF90",
                  width: "700px",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                3rd comment
              </p>
            </div>
          </ul>
          <ul className="col sm-12 comment_section d-flex px-3">
            <Avatar name="jagtap thik" size="50" round={true} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
              }}
            >
              <ReactStars
                count={5}
                // onChange={ratingChanged}
                size={35}
                // isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#FEC200"
                classNames="d-block"
              />
              <p
                style={{
                  backgroundColor: "#FDFF90",
                  width: "700px",
                  padding: "10px 10px",
                  borderRadius: "10px",
                }}
              >
                3rd comment
              </p>
            </div>
          </ul>
        </div>
      </Zoom>
    </>
  );
};

export default CommentRating;
