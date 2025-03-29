import React from "react";
import cardImg1 from "../../assets/images/resources/benefit-one-img-1.jpg";
import cardImg2 from "../../assets/images/resources/benefit-one-img-2.jpg";
import cardImg3 from "../../assets/images/resources/benefit-one-img-3.jpg";

export default function ProductsWhy() {
  const data = [
    {
      image: cardImg1,
      heading: "Leak-Proof & Sturdy",
      body: "Handle hot and cold beverages without leaks.",
    },
    {
      image: cardImg2,
      heading: "Safe for Food & Drinks",
      body: "Made with non-toxic materials, ensuring safety",
    },
    {
      image: cardImg3,
      heading: "Eco-Friendly & Biodegradable",
      body: "Decomposes naturally without harming the planet.",
    },
    {
      image: cardImg2,
      heading: "Customizable for Your Brand",
      body: "Personalize with your logo and brand colours.",
    },
  ];

  return (
    <>
      <section className="relative py-5  md:py-15 grid grid-cols-1 gap-4">
        <div className="d-flex flex-col content-left mt-5 md:mt-0 container mx-auto text-left">
          <p className="text-md text-dg ">
            <span className="section-title__tagline">
              What Makes Us Different?{" "}
            </span>
          </p>
          <h1 className="font-bold text-black text-4xl md:text-7xl my-5">
            Thoughtfully Manufactured for Businesses Like Yours
          </h1>
          <p
            className="font-normal text-md text-lblack my-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            Our products are carefully designed solutions that address the
            critical needs of modern businesses - combining performance,
            sustainability, and practical innovation to support your operational
            excellence.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 container  mx-auto  ">
          {data.map((val, index) => (
            <div
              className="  text-center  bg-white shadow-md iconbox"
              key={index}
            >
              <div className="">
                <img src={val.image} />
              </div>
              <div className="grid grid-rows-1 gap-2 md:gap-4   mt-[-45px] iconbox px-1 ">
                <div className=" w-25 h-25 bg-dg rounded-full mx-auto thm-icon"></div>
                <div className="">
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {val.heading}
                  </h3>
                  <p
                    className="font-normal text-lblack text-md my-5"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                  >
                    {val.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
