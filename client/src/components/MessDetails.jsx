import React, { useEffect, useState } from "react";
import food1 from "../imgs/food1.jpg";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import DirectionsIcon from "@material-ui/icons/Directions";
// import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { useParams, useHistory } from "react-router-dom";
import { authAxiosCust } from "../App";
import { toast } from "react-toastify";
import {Card,Col,ListGroup,Row,Image,Container,Button} from 'react-bootstrap';

// Icons
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";


function MessDetails() {
  let history = useHistory();
  const { messId } = useParams();
  const custId = localStorage.getItem("userId");
  const [mess, setMess] = useState({
    messName: "",
    address: "",
    menuList: [],
    subscribers: [],
  });

  const [subscribe, setSubscribe] = useState(false);

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

  const subscribeMess = (messid) => {
    authAxiosCust
      .post(`api/subscription/subscribe/${custId}/${messid}`)
      .then(() => toast.success("bookmarked"))
      .catch(() => toast.error("something went wrong"));

    setSubscribe((prev) => !prev);
  };

  const unsubscribeMess = () => {
    authAxiosCust
      .get(`api/customer/${custId}`)
      .then((res) => {
        console.log(res.data.Customer.savedMess);
        const subId = findSubscriptionId(
          res.data.Customer.savedMess,
          mess.subscribers
        );
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

  useEffect(() => {
    authAxiosCust
      .get(`api/customer/features/savedmess/${custId}`)
      .then((res) => {
        // console.log(res);
        res.data.doc.find((val) => val._id === messId)
          ? setSubscribe(true)
          : setSubscribe(false);
      })
      .catch((err) => console.log(err));

    authAxiosCust
      .get(`/api/mess/${messId}`)
      .then((res) => {
        console.log(res.data.Mess[0].subscribers);
        setMess({
          messName: res.data.Mess[0].messDetails.messName,
          menuList: res.data.Mess[0].MenuList,
          address: res.data.Mess[0].messDetails.address,
          subscribers: res.data.Mess[0].subscribers,
        });
      })
      .catch((err) => console.log(err));
  }, [messId, custId]);

  return (
    <Container>
      {/* <NavLink
        to="/customer/dashboard"
        style={{ color: "white", textDecoration: "none" }}
      > */}
      {/* <ArrowBackIcon
        className="mt-4 ml-4"
        style={{ transform: "scale(1.5)", cursor:"pointer" }}
        onClick={() => history.goBack()}
      /> */}
      <Button variant="light" onClick={() => history.goBack()}>Go Back</Button>
      
      {/* <div className="containerDetails">
        <div className="card mess-card mr-4">
          <div className="row">
            <div className="col-md-4" >
              <img src={food1} className="card-img" id="mess-pic" alt="food1" />
            </div>
            <div
              className="col-md-8 mess-info"
            >
              <div className="d-flex justify-content-between">
                <h1>
                  {mess.messName} <VerifiedUserIcon className=" text-success" />
                </h1>
                {subscribe === false ? (
                  <BookmarkBorderIcon
                    className="text-warning mx-3 my-2"
                    style={{ transform: "scale(1.8)", cursor: "pointer" }}
                    onClick={() => subscribeMess(messId)}
                  />
                ) : (
                  <BookmarkIcon
                    className="text-warning mx-3 my-2"
                    style={{ transform: "scale(1.8)", cursor: "pointer" }}
                    onClick={() => unsubscribeMess()}
                  />
                )}
              </div>
              <div className="starIcon" >
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
                className="h4 mess-info-cuisine"
                style={{
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
                <span className="ml-2">{mess.address}</span>
                <p className="ml-4" style={{ marginTop: "5px" }}>
                  <span>5 km from Pccoe</span>
                  <DirectionsIcon style={{ color: "#FFB800" }} />
                </p>
              </div>
            </div>
          </div> */}
          {/* <div style={{ backgroundColor: "#FFF8DE" }}> */}

       
        <Row style={{marginBottom:"2rem"}}>
          <Col md={5}>
            <Image src={food1} alt='foodimage' fluid />
          </Col>
          <Col md={6}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                 <h3>{mess.messName}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
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
              </ListGroup.Item>

              <ListGroup.Item>
                Chinese,FastFoood,North Asia Food...
              </ListGroup.Item>

              <ListGroup.Item>
                {mess.address}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={1}>
            {subscribe === false ? (
                    <BookmarkBorderIcon
                      className="text-warning mx-3 my-2"
                      style={{ transform: "scale(1.8)", cursor: "pointer" }}
                      onClick={() => subscribeMess(messId)}
                    />
                  ) : (
                    <BookmarkIcon
                      className="text-warning mx-3 my-2"
                      style={{ transform: "scale(1.8)", cursor: "pointer" }}
                      onClick={() => unsubscribeMess()}
                    />
            )}
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ListGroup>
              <ListGroup.Item>
                <h3>Available Menu's</h3>
              </ListGroup.Item>
                
            </ListGroup>
          </Col>
          
        </Row>
               
        <Row>
          {mess.menuList.map((item) => {
            
              return (
              <Col key={item._id} sm={12} md={6} lg={4} xl={4}>
                <Card className='my-3 p-3 rounded'>
                  <Card.Body>
                      
                      <Card.Title as='div'>
                          <h5>{item.menuName}</h5>
                      </Card.Title>
                      
                      <Card.Text>
                        <div>
                          {item.menuItem.map((idx) => {
                            return (
                              <h6 className="mr-2" key={idx._id} style={{display:"inline"}}>
                                {idx.itemName}
                              </h6>
                            );
                          })}
                        </div>
                      </Card.Text>

                      <Card.Text as='div'>
                          <div className=''>
                            <h4>Rs.{item.price}</h4>            {item.tag[0]}
                          </div>
                      </Card.Text>
                      <Card.Text>
                        {
                          window.location === '/mess' ? 
                          <div>
                              <EditIcon style={{ color: "green" }} />
                              <DeleteIcon style={{ color: "#f44336" }} />
                          </div> : null
                        }
                      </Card.Text>
                  </Card.Body>
                </Card>
              
              </Col>
            );
          })}
        </Row>
          {/* </div> */}
        {/* </div>
      </div> */}
    </Container>
  );
}


export default MessDetails;



{/* <ul className="col sm-12 mess-menus d-flex" key={item._id}>
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
                  <li style={{ color: "#FF5C00" }} className="font-weight-bold">
                    {item.price} INR
                  </li>
                  <li>{item.tag[0]}</li>
                </ul> */}


//1.<div className="starIcon" >style={{ color: "#FFB800" }}
//fluid	: Allow the Container to fill all of its available horizontal space.
