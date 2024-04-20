import React, { useContext } from "react";
import { Context } from "../../contextApi/Context";
import { GiSpeedometer } from "react-icons/gi";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";

import { BsArrowUpRight } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ReusableComp = ({ offerType }) => {
  const { allCars } = useContext(Context);
  const filteredCars = allCars.filter((car) => car.offerType === offerType);
  return (
    <div className="featuredlist">
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        className="location-jobs"
        // swipeable={false}
        // draggable={true}
        // showDots={true}
        // customTransition="all .5"
        // transitionDuration={500}
      >
        {filteredCars.map((detail) => (
          <div key={detail.id} className="car-detail">
            <div className="bookmark">
              <BsBookmark />
            </div>{" "}
            {/* Implement Conditional  Bookmark here*/}
            <div className="featuredimg">
              <img src={detail.image} alt="" />
            </div>
            <Link to={`/car-details/${detail.id}`}>
              {" "}
              <h2 className="title ml">{detail.carName}</h2>
            </Link>
            <div className="car-features ml">
              <div className="mileage flex-column">
                <GiSpeedometer />
                <span>{detail.mileage}</span>
              </div>
              <div className="fueltype flex-column">
                <BsFuelPump />
                <span>{detail.fuelType}</span>
              </div>
              <div className="transmission flex-column">
                <GiGearStickPattern />
                <span>{detail.transmission}</span>
              </div>
            </div>
            <div className="prices ml">
              <span className="price">Rs. {detail.discountedPrice}</span>
              <Link to={`/car-details/${detail.id}`}>
                <span
                  style={{
                    width: "55px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textDecoration: "none"
                  }}
                >
                  View <BsArrowUpRight />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReusableComp;
