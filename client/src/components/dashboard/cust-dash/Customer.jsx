import React from "react";
import NavBar from "./NavBar"; 
import MessCard from "./MessCard";
import CarouselCard from "./CarouselCard";
import food1 from "../../../imgs/food1.jpg";
import MessCardData from "./MessCardData";

const Customer = () => {
  return (
    <>
      <NavBar/>

      <header className=" mt-3">
        <div className="container">
          <div
            id="carouselExampleControls"
            className="carousel slide mx-5"
            data-ride="carousel"
           >
           <div className="carousel-inner">
              <div className="carousel-item active ">
                <CarouselCard />
              </div>
              <div className="carousel-item">
                <CarouselCard />
              </div>
              <div className="carousel-item">
                <CarouselCard />
              </div>
           </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              style={{ width:"10%"}}
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                style={{ filter: "invert(1)" , width:"45px",height: "26px"}}
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next "
              style={{ width:"10%"}}
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                style={{ filter: "invert(1)" , width:"45px",height: "26px"}}
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </header>


    
      <div className="my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row justify-content-center ">
                {
                  MessCardData.map((item , index )=>{
                    return <MessCard key={index}
                      messImg={item.messDetails.messImg}
                      messName={item.messDetails.messName}
                      messAdd={item.messDetails.address}
                    />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
