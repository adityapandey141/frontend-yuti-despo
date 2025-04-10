import React from "react";
import { Link } from "react-router";
export default function ProductsList() {
  const categories = [
    { subheading: "Cafes & Coffee Shops" },
    { subheading: "Fast Food Chains" },
    { subheading: "Food Delivery Services" },
    { subheading: "Event Organisers" },
    { subheading: "Hotels & Resorts" },
    { subheading: "Travel Services" },
    { subheading: "Retail Stores" },
    { subheading: "Corporate Offices" },
    { subheading: "Schools & Institutions" },
    { subheading: "Grocery & Supermarkets" },
  ];

  return (
    <>
      <section className="" id="productlist">
        <div className="container mx-auto bg-dg py-10 md:py-15 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
            <div className="col-span-2">
              <h1
                className="font-bold text-center text-white text-3xl md:text-7xl my-5"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="900"
              >
                Versatile Products for Various Needs
              </h1>
            </div>

            <div className="col-span-2 grid grid-cols-1 gap-2 md:grid-cols-2">
              {categories.map((val, index) => (
                <div className="text" key={index}>
                  <p
                    className=" text-left text-sm md:text-base font-700"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="900"
                  >
                    <span className="fa fa-check">* </span> {val.subheading}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dg py-15 plistbackground relative">
        <div className="overlay z-0"></div>
        <div className="container relative  mx-auto z-4">
          <div className="grid grid-cols-1 items-center  gap-4 md:gap-4 md:mt-20">
            <h1
              className="font-bold text-4xl  text-center text-white  my-5 animate__animated animate__fadeInUp"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              The Choice Is Clear: Sustainable Doesn't Mean Compromising
            </h1>
            <div className=" text-center">
              <Link
                to="/contact"
                className="thm-btn  rounded"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
