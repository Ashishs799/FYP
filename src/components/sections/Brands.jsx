import React, { useContext } from "react";
import { Context } from "../../contextApi/Context";
import { Link } from "react-router-dom";
import "../styles/Brands.css";

const Brands = () => {
  const { carBrands } = useContext(Context);
  const { ChooseUs } = useContext(Context);
  return (
    <section className="brands_section">
      <div className="carType public-m">
        <h2>Explore Our Premium Brands</h2>
        <div className="browseType">
          {carBrands.map((brand) => {
            return (
              <Link
                to={`/brands/${brand.name}`}
                style={{ textDecoration: "none" }}
              >
                <div key={brand.id} className="types brands">
                  <img src={brand.image} alt="" />
                  <span>{brand.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="why_choose_us">
        <h2>Why Choose Us?</h2>
        <div className="choice_container public-m">
          {ChooseUs.map((choice) => (
            <div className="choices ">
              <img src={choice.logo} alt="" />
              <span>{choice.service}</span>
              <p>{choice.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
