import React from "react";
import icon1 from "../../assets/images/icon/services-2-icon-1.png";

export default function Section5() {
  const data = [
    {
      icon: icon1,
      head: "Less Waste, More Impact",
      body: "Every recycled paper product helps reduce landfill waste.",
    },
    {
      icon: icon1,
      head: "Lower Carbon Footprint",
      body: "Manufacturing recycled paper products consumes less energy",
    },
    {
      icon: icon1,
      head: "A Step Towards Sustainability",
      body: "Choosing paper over plastic has a big impact on the environment.",
    },
  ];
  return (
    <>
      <section className="bg-dg py-15 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
            {data.map((value, index) => (
              <div
                key={index}
                className="bg-black  text-white rounded-lg shadow-lg p-5 md:p-5 text-left bg-opacity-30 hover:bg-opacity-100 transition delay-150 duration-500 ease-in-out hover:-translate-y-1 cursor-pointer"
              >
                <img src={value.icon} className="" />
                <h3 className="text-yel text-2xl font-bold  mt-3">
                  {value.head}
                </h3>
                <p className="text-gray-300 mt-3 text-[#f2f2f2]">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
