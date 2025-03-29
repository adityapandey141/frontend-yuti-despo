import React from "react";
import cardImg1 from "../../assets/images/resources/benefit-one-img-1.jpg";
import cardImg2 from "../../assets/images/resources/benefit-one-img-2.jpg";
import cardImg3 from "../../assets/images/resources/benefit-one-img-3.jpg";

export default function Section4() {
  const data = [
    {
      image: cardImg1,
      heading: "Paper Cups",
      body: "Versatile, sturdy cups designed for cafes, restaurants, and corporate events.",
    },
    {
      image: cardImg2,
      heading: "Paper Bowls",
      body: "Lightweight, eco-friendly, and strong enough to hold your culinary creations.",
    },
    {
      image: cardImg3,
      heading: "Paper Bags",
      body: " Branded or plain, our bags are the eco-conscious choice for businesses that care.",
    },
  ];

  return (
    <>
      <section className="section4 bg-[#f5f0e9] relative py-10  md:py-15 grid grid-cols-1 gap-4">
        <div className="overlay"></div>
        <div className="d-flex flex-col content-center md:mt-0 container mx-auto text-center">
          <p className="text-md text-dg ">
            <span className="section-title__tagline">Our Product Range</span>
          </p>
          <h1 className="font-bold text-black text-4xl md:text-7xl my-5">
            For Modern Businesses
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 container  mx-auto  ">
          {data.map((val, index) => (
            <div
              className="  text-center  bg-white shadow-md iconbox"
              key={index}
            >
              <div className="">
                <img src={val.image} />
              </div>
              <div className="grid grid-rows-1 gap-6   mt-[-70px] iconbox px-5 md:px-15 pb-5 md:pb-10">
                <div className=" w-30 h-30 bg-dg rounded-full mx-auto thm-icon"></div>
                <div className="">
                  <h3 className="text-3xl md:text-4xl font-semibold">
                    {val.heading}
                  </h3>
                  <p className="text-lblack">{val.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
