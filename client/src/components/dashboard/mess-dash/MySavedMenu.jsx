import React, { useEffect, useState } from "react";
import "./MessSettings.css";
import EditIcon from "@material-ui/icons/Edit";
import StarsIcon from '@material-ui/icons/Stars';
import { authAxiosMess } from "../../../App";

const MySavedMenu = () => {
  // const getId = localStorage.getItem("userIdMess");
  // const [menu , setMenu] = useState([]);

  // useEffect(()=>{
  //   authAxiosMess
  //   .get(`api/menu/all/${getId}`)
  //   .then((res) => {
  //     console.log(res);
  //     console.log(res.data);
  //     setMenu(res.data);
  //   })
  //   .catch((err) => console.log(`${err} :some error while fetching menu list`));
  // },[])

  return (
    <div className="mt-4" style={{ width: "70%" }}>
      <div className="edit-profile ml-1 container">
        <div style={{ backgroundColor: "#FFF8DE" }}>
          <ul
            className="col sm-12 d-flex justify-content-between align-items-center bg-white"
            style={{ borderRadius: "5px", height: "75px", borderLeft:"8px solid #FFB800" }}
          >
            <li>
              Aloo Sabji, Roti, Dal Rice, Papad, Pickle, Taak
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li className="font-weight-bold" style={{ color: "#FF5C00",letterSpacing:"2px" }}>60 INR</li>
            <li>Veg</li>
            <li>
              <StarsIcon style={{ color: "#FFB800" }} />
            </li>
            <li className="mr-3">
              <EditIcon style={{ color: "#FFB800" }} />
            </li>
            
          </ul>
          <ul className="col my-2 sm-12 mess-menus">
            <li>
              Khichadi , Dahi, Sabudana wada
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li style={{ color: "#FF5C00" }}>40 INR</li>
            <li>
              <EditIcon style={{ color: "#FFB800" }} />
            </li>
            <li>Veg</li>
          </ul>
          <ul className="col sm-12 mess-menus">
            <li>
              Paneer, Roti, Fried Rice, Dal tadka
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li style={{ color: "#FF5C00" }}>75 INR</li>
            <li>
              <EditIcon style={{ color: "#FFB800" }} />
            </li>
            <li>Veg</li>
          </ul>
          <ul className="col sm-12 mess-menus">
            <li>
              Shwarma Vegeta
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li style={{ color: "#FF5C00" }}>90 INR</li>
            <li>
              <EditIcon style={{ color: "#FFB800" }} />
            </li>
            <li>Veg</li>
          </ul>
          <ul className="col sm-12 mess-menus">
            <li>
              Dal Khicdi,dal bath
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li style={{ color: "#FF5C00" }}>35 INR</li>
            <li>
              <EditIcon style={{ color: "#FFB800" }} />
            </li>
            <li>Veg</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MySavedMenu;
