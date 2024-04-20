import React from "react";
import { useContext } from "react";
import { Context } from "../../contextApi/Context";
import "../styles/CarList.css";

import { GiSpeedometer } from "react-icons/gi";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPump } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { BsArrowUpRight } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";
import { EmptyList } from "./EmptyList";

export const CarList = ({ condition, brandName, bodyType }) => {
  const { allCars } = useContext(Context);
  let filteredCars = brandName
    ? allCars.filter((car) => car.make === brandName)
    : allCars;
  if (condition) {
    filteredCars = allCars.filter((car) => car.condition === condition);
  }

  if (bodyType) {
    filteredCars = allCars.filter((car) => car.type === bodyType);
  }

  return (
    <div className="car_list sections">
      <div className="section_wrapper usedcar_wrapper public-m">
        {filteredCars.length > 0 ? (
          <div className="car_details_box">
            {filteredCars.map((cars) => (
              <div key={cars.id} className="car-detail">
                <div className="bookmark">
                  <BsBookmark />
                </div>{" "}
                {/* Implement Conditional  Bookmark here*/}
                <div className="featuredimg">
                  <img src={cars.image} alt="" />
                </div>
                <Link to={`/car-details/${cars.id}`}>
                  <h2 className="title ml">{cars.carName}</h2>
                </Link>
                <div className="car-features ml">
                  <div className="mileage flex-column">
                    <GiSpeedometer />
                    <span>{cars.mileage}</span>
                  </div>
                  <div className="fueltype flex-column">
                    <BsFuelPump />
                    <span>{cars.fuelType}</span>
                  </div>
                  <div className="transmission flex-column">
                    <GiGearStickPattern />
                    <span>{cars.transmission}</span>
                  </div>
                </div>
                <div className="prices ml">
                  <span className="price">Rs. {cars.discountedPrice}</span>
                  <Link to={`/car-details/${cars.id}`}>
                    <span
                      style={{
                        width: "55px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      View <BsArrowUpRight />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyList make={brandName} bodyType={bodyType} />
        )}
      </div>
    </div>
  );
};
