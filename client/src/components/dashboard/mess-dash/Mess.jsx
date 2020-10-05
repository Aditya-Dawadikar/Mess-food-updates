import React, { useEffect, useState } from "react";
import NavBar from "../cust-dash/NavBar"; 
import MessCard from "../cust-dash/MessCard";
import CarouselCard from "../cust-dash/CarouselCard";
import MessCardData from "../cust-dash/MessCardData";
import Loader from "react-loader-spinner";
import axios from "axios";
import Customer from "../cust-dash/Customer";

const base_url = "http://localhost:9000";

const Mess = () => {

  return (
    <>
    <Customer/>
    </>
  );
};

export default Mess;
