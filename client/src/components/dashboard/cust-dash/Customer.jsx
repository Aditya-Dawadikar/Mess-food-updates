import React from "react";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import { BiSearchAlt } from "react-icons/bi";
import Card from "./MessCard";
import CarouselCard from "./CarouselCard";
import food1 from "../../../imgs/food1.jpg";

const Customer = () => {
  return (
    <>
      <nav className="navbar navbar-fixed-top mt-2">
        <div className="navbar-brand">
          <FormatListBulletedRoundedIcon />
        </div>
        <form className="form-inline mx-auto">
          <input
            className="form-control rounded-pill"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-warning ml-2 " type="submit">
            <BiSearchAlt />
          </button>
        </form>
      </nav>

      <header className=" my-3">
        <div className="container">
          <div
            id="carouselExampleControls"
            class="carousel slide mx-5"
            data-ride="carousel"
           >
           <div class="carousel-inner">
              <div class="carousel-item active ">
                <CarouselCard />
              </div>
              <div class="carousel-item">
                <CarouselCard />
              </div>
              <div class="carousel-item">
                <CarouselCard />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                style={{ filter: "invert(1)" }}
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                style={{ filter: "invert(1)" }}
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </header>

      <div className="my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row justify-content-center ">
                <Card geet={food1} />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
