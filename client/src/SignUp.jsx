// import React, { useState } from "react";
// import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
// import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
// import FastfoodIcon from "@material-ui/icons/Fastfood";

// const SignUp = () => {
//   const[user, setUser] = useState({
//     fullname:{
//          lastName:"",
//          rollNo:"",
//       },
//     password: "",
//     email: "",
//     phone: "",
//   });

//   const inputEvent = (e) => {
//     const { name, value } = e.target;

//     setUser((preValue) => {
//       return {
//         ...preValue,
//         [name]: value,
//       };
//     });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log(user);
//     alert("sign Up successfully");
//   };

//   return (
//     <>
//         <form onSubmit={onSubmit} autoComplete="off">
//           <div className="inputForm">
//             <h1>
//               Sign Up <FastfoodIcon className="icons"/>
//             </h1>
//             <div className="inputTag">
//               <input
//                 type="text"
//                 placeholder="Enter Your Name"
//                 name="fullname"
//                 onChange={inputEvent}
//                 value={user.fullname.lastName}
//               />
//               <PersonOutlineOutlinedIcon
//                 style={{
//                   background: "transparent",
//                   color: "black",
//                   top: "1.5rem",
//                   left: "1rem",
//                   position: "absolute",
//                 }}
//               />
//               <input
//                 type="text"
//                 placeholder="Enter Your rollno"
//                 name="rollno"
//                 onChange={inputEvent}
//                 value={user.fullname.rollno}
//               />
//               <PersonOutlineOutlinedIcon
//                 style={{
//                   background: "transparent",
//                   color: "black",
//                   top: "1.5rem",
//                   left: "1rem",
//                   position: "absolute",
//                 }}
//               />
//               <input
//                 type="email"
//                 placeholder="Enter Your EmailID"
//                 name="email"
//                 onChange={inputEvent}
//                 value={user.email}
//               />
//               <EmailOutlinedIcon
//                 style={{
//                   background: "transparent",
//                   color: "black",
//                   top: "6.5rem",
//                   left: "1rem",
//                   position: "absolute",
//                 }}
//               />
//               <input
//                 type="number"
//                 placeholder="Enter Your Phone no."
//                 name="phone"
//                 onChange={inputEvent}
//                 value={user.phone}
//               />
//               <PhoneIphoneOutlinedIcon
//                 style={{
//                   background: "transparent",
//                   color: "black",
//                   top: "11.5rem",
//                   left: "1rem",
//                   position: "absolute",
//                 }}
//               />
//               <input
//                 type="password"
//                 placeholder="Enter Your password"
//                 name="password"
//                 onChange={inputEvent}
//                 value={user.password}
//               />
//               <LockOutlinedIcon
//                 style={{
//                   background: "transparent",
//                   color: "black",
//                   top: "16.5rem",
//                   left: "1rem",
//                   position: "absolute",
//                 }}
//               />
//               <button type="submit">SIGN UP</button>
//             </div>
//           </div>
//         </form>
//     </>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import axios from 'axios';


const SignUp = () => {
  const [mess, setMess] = useState({
    password: "",
    email: "",
    messDetails:{
        messName: "",
        ownerName:"",
        phone: "",
        address:"",
    },
    price:{
        homeDelivery:{
            available:"",
            DeliveryCharge:"",
        },
        onVenue:{
            available:"",
        }
    },
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;

    setMess((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(mess);
    axios.post('http://localhost:9000/api/register/mess',{
        "email": mess.email,
		"password": mess.password,
		"messDetails": {
            "messName": mess.messDetails.messName,
            "ownerName": mess.messDetails.ownerName,
            "phone": mess.messDetails.phone,
            "address": mess.messDetails.address
		    },
		"price": {
            "homeDelivery": {
                "available": mess.price.homeDelivery.available,
                "DeliveryCharge": mess.price.homeDelivery.DeliveryCharge
            },
            "onVenue": {
                "available": mess.price.onVenue.available
            }
		}
    })
    .then((response) => {
        console.log(response);
        console.log("sign Up successfully");
    })
    .catch( (error) => {
        console.log(error)
    })  
    
  
  };

  return (
    <>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="inputForm">
            <h1>
              Sign Up <FastfoodIcon />
            </h1>
            <div className="inputTag">
              <input
                type="text"
                placeholder="Enter Your  Mess Name"
                name="messDetails.messName"
                onChange={inputEvent}
                value={mess.messDetails[0]}
              />
              <input
                type="text"
                placeholder="Enter Your Owner Name"
                name="messDetails.ownerName"
                onChange={inputEvent}
                value={mess.messDetails[1]}
              />
              <input
                type="email"
                placeholder="Enter Your EmailID"
                name="email"
                onChange={inputEvent}
                value={mess.email}
              />
              <input
                type="number"
                placeholder="Enter Your Phone no."
                name="messDetails.phone"
                onChange={inputEvent}
                value={mess.messDetails[2]}
              />
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={inputEvent}
                value={mess.password}
              />
              <input
                type="text"
                placeholder="Enter Your Mess Address"
                name="messDetails.address"
                onChange={inputEvent}
                value={mess.messDetails[3]}
              />
              <input
                type="text"
                placeholder="Home Delivery True/False"
                name="price.homeDelivery.available"
                onChange={inputEvent}
                value={mess.price.homeDelivery[0]}
              />
              <input
                type="text"
                placeholder="On Venue Available True/False"
                name="price.onVenue.available"
                onChange={inputEvent}
                value={mess.price.onVenue[0]}
              />
               <input
                type="number"
                placeholder="Home Delivery Charge"
                name="price.homeDelivery.deliveryCharge"
                onChange={inputEvent}
                value={mess.price.homeDelivery[1]}
              />
              <button type="submit">SIGN UP</button>
            </div>
          </div>
        </form>
    </>
  );
};

export default SignUp;