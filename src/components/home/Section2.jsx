import React from "react";

export default function Section2() {
  const data = [
    {
      heading: "Leak-Proof & Sturdy",
      image: "",
    },
    {
      heading: "Safe for Food & Drinks",
      image: "",
    },
    {
      heading: "Eco-Friendly & Biodegradable",
      image: "",
    },
    {
      heading: "Customizable for Your Brand",
      image: "",
    },
  ];

  return (
    <>
      <section className=" text-white relative mt-[-20px] md:mt-[-50px]">
        <div className="bg-black container  mx-auto pt-15 md:pt-0 pb-15">
          <div className="grid grid-cols-2  md:grid-cols-4 gap-4  text-center  ">
            {data.map((val, index) => (
              <div
                className="grid grid-rows-1 gap-6   md:mt-[-70px] iconbox px:3 md:px-15"
                key={index}
              >
                <div className="w-25 h-25 md:w-30 md:h-30 bg-dg rounded-full mx-auto thm-icon"></div>
                <div className="  ">
                  <h3 className="text-xl md:text-4xl font-semibold">
                    {val.heading}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
