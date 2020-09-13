import React from "react";
import "./MessSettings.css";
import EditIcon from '@material-ui/icons/Edit';

const Mess_user3 = () => {
  return (
    <div className="mt-4" style={{ width: "70%" }}>
      <div className="edit-profile ml-1 container">
        <div style={{ backgroundColor: "#FFF8DE" }}>
          <ul class="col sm-12 mess-menus">
            <li>
              Aloo Sabji, Roti, Dal Rice, Papad, Pickle, Taak{" "}
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li style={{ color: "#FF5C00" }}>60 INR</li>
            <li><EditIcon style={{color:"#FFB800"}}/></li>
            <li>Veg</li>
          </ul>
          <ul class="col my-2 sm-12 mess-menus">
            <li>
              Khichadi , Dahi, Sabudana wada{" "}
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li style={{ color: "#FF5C00" }}>40 INR</li>
            <li><EditIcon style={{color:"#FFB800"}}/></li>
            <li>Veg</li>
          </ul>
          <ul class="col sm-12 mess-menus">
            <li>
              Paneer, Roti, Fried Rice, Dal tadka{" "}
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li style={{ color: "#FF5C00" }}>75 INR</li>
            <li><EditIcon style={{color:"#FFB800"}}/></li>
            <li>Veg</li>
          </ul>
          <ul class="col sm-12 mess-menus">
            <li>
              Shwarma Vegeta{" "}
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li style={{ color: "#FF5C00" }}>90 INR</li>
            <li><EditIcon style={{color:"#FFB800"}}/></li>
            <li>Veg</li>
          </ul>
          <ul class="col sm-12 mess-menus">
            <li>
              Dal Khicdi,dal bath{" "}
              <img
                src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png"
                alt="veg"
              />
            </li>
            <li style={{ color: "#FF5C00" }}>35 INR</li>
            <li><EditIcon style={{color:"#FFB800"}}/></li>
            <li>Veg</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mess_user3;
