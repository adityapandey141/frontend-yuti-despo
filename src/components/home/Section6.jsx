import React from "react";
import cardImg1 from "../../assets/images/resources/benefit-one-img-1.jpg";
import cardImg2 from "../../assets/images/resources/benefit-one-img-2.jpg";
import cardImg3 from "../../assets/images/resources/benefit-one-img-3.jpg";

export default function Section6() {
  const data = [
    {
      image: cardImg1,
      heading: "Food and Beverages",
      body: "Keeps food fresh and appealing",
    },
    {
      image: cardImg2,
      heading: "Hospitality",
      body: " Increases guest experience.",
    },
    {
      image: cardImg3,
      heading: " Tours and Travellers",
      body: "Lightweight, durable packaging",
    },
    {
      image: cardImg2,
      heading: "E-Commerce",
      body: "Enhances unboxing experiences",
    },
  ];

  return (
    <>
      <section className="relative py-5  md:py-15 grid grid-cols-1 gap-4">
        <div className="d-flex flex-col content-left mt-5 md:mt-0 container mx-auto text-left">
          <p className="text-md text-dg ">
            <span className="section-title__tagline">Who We Serve</span>
          </p>
          <h1 className="font-bold text-black text-4xl md:text-7xl my-3 md:my-5">
            Versatile Solutions Across Industries
          </h1>
          <p
            className="font-normal text-lblack text-md my-3 md:my-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            We understand that every industry has unique requirements, and our
            products are manufactured to provide practical and sustainable
            packaging across different sectors.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-15 container  mx-auto  ">
          {data.map((val, index) => (
            <div
              className="  text-center  bg-white shadow-md iconbox"
              key={index}
            >
              <div className="">
                <img src={val.image} />
              </div>
              <div className="grid grid-rows-1 gap-2 md:gap-6   mt-[-45px] iconbox px-3 pb-10">
                <div className=" w-25 h-25 bg-dg rounded-full mx-auto thm-icon"></div>
                <div className="">
                  <h3 className="text-2xl md:text-4xl font-semibold">
                    {val.heading}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
