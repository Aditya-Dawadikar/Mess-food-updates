import React from 'react';
import food1 from "../../../imgs/food1.jpg";
import GradeRoundedIcon from "@material-ui/icons/GradeRounded";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsIcon from "@material-ui/icons/Directions";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavLink } from "react-router-dom";



function MessDetails() {
    return (
        <div className='containerDetails'>
        <NavLink to='/customer/dashboard' style={{color: 'white', textDecoration: 'none'}}>
            <ArrowBackIcon style={{color:"#FFB800",transform:"translateY(-300px) scale(1.8)"}} />
        </NavLink>
            <div className="card mess-card">
                <div className="row">
                    <div className="col-md-4" style={{backgroundColor:"#FFF8DE"}}>
                        <img src={food1} className="card-img" id="mess-pic" alt="food1" />
                    </div>
                    <div className="col-md-8 mess-info" style={{backgroundColor:"#FFF8DE"}}>
                        <h1 style={{ color: "#FFB800"}}>
                            Surya Mess <VerifiedUserIcon className=" text-success" />
                        </h1>
                        <div className='starIcon' style={{ color: "#FFB800"}}>
                            <GradeRoundedIcon style={{transform:"scale(1.5)",}}/>
                            <GradeRoundedIcon style={{transform:"scale(1.5)",marginLeft:"8px"}}/>
                            <GradeRoundedIcon style={{transform:"scale(1.5)",marginLeft:"8px"}}/>
                            <GradeRoundedIcon style={{transform:"scale(1.5)",marginLeft:"8px"}}/>
                        </div>
                        <p className="h2 mess-info-cuisine" style={{color:"#B0A7A7",fontWeight:"lighter",paddingTop:"7px"}}>
                            Chinese,FastFoood,North Asia Food
                        </p>
                        <div className="h4 mess-info-address" style={{paddingTop:"7px"}}>
                            <LocationOnIcon style={{ color: "#FF4D00", transform: "scale(1.5)" }} />
                                   <span>Krushna Chowk, Akurdi</span>
                                <p className="ml-4" style={{marginTop:"5px"}}>
                                   <span>5 km from Pccoe</span>
                                <DirectionsIcon style={{ color: "#FFB800" }} />
                                </p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor:"#FFF8DE"}}>
                    <ul class="col sm-12 mess-menus">
                        <li>Aloo Sabji, Roti, Dal Rice, Papad, Pickle, Taak  <img src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png" alt="veg"/></li>
                        <li style={{color:"#FF5C00"}}>60 INR</li>
                        <li>Veg</li>
                    </ul>
                    <ul class="col my-2 sm-12 mess-menus">
                        <li>Khichadi , Dahi, Sabudana wada   <img src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png" alt="veg"/></li>
                        <li style={{color:"#FF5C00"}}>40 INR</li>
                        <li>Veg</li>
                    </ul>
                    <ul class="col sm-12 mess-menus">
                        <li>Paneer, Roti, Fried Rice, Dal tadka  <img src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png" alt="veg"/></li>
                        <li style={{color:"#FF5C00"}}>75 INR</li>
                        <li>Veg</li>
                    </ul>
                    <ul class="col sm-12 mess-menus">
                        <li>Shwarma Vegeta  <img src="https://img.icons8.com/color/20/000000/vegetarian-food-symbol.png" alt="veg"/></li>
                        <li style={{color:"#FF5C00"}}>90 INR</li>
                        <li>Veg</li>
                    </ul>
                    <ul class="col sm-12 mess-menus">
                        <li>Dal Khicdi,dal bath </li>
                        <li style={{color:"#FF5C00"}}>35 INR</li>
                        <li>Veg</li>
                    </ul>
                 </div>

                </div>
        </div>
    )
}


export default MessDetails;
