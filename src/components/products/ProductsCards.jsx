import React from "react";
import icon1 from "../../assets/images/Products/Paper Cups.svg";
import icon2 from "../../assets/images/Products/Paper Bowls.svg";
import icon3 from "../../assets/images/Products/Paper Bags.svg";
import icon4 from "../../assets/images/Products/Paper Straws.svg";
export default function ProductsCards() {
  const data = [
    {
      icon: icon1,
      head: "Paper Cups",
      body: "Our paper cups are leak-proof, temperature-resistant, and available in multiple sizes to suit every business need.",
    },
    {
      icon: icon2,
      head: "Paper Bowls",
      body: "Ideal for hot and cold foods. Strong and durable, these bowls are perfect for serving meals on the go.",
    },
    {
      icon: icon3,
      head: "Paper Bags",
      body: "An alternative to plastic bags for takeaway and retail packaging. Make it your brand's commitment to sustainability.",
    },
    {
      icon: icon4,
      head: "Paper Straws",
      body: "A biodegradable option for sipping responsibly. These are biodegradable, work for cold and hot beverages.",
    },
  ];
  return (
    <>
      <section className="bg-white py-15 md:py-20 ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            {data.map((value, index) => (
              <div
                key={index}
                className={`${
                  (index + 1) % 2 == 1 ? "md:mt-[-35px]" : "md:mb-[-35px]"
                }  bg-black  text-white rounded-lg shadow-lg p-5 text-left bg-opacity-30 hover:bg-opacity-100 transition delay-150 duration-500 ease-in-out hover:-translate-y-1 cursor-pointer`}
              >
                <img src={value.icon} className="w-10" />
                <h1 className="text-yel text-2xl font-bold  mt-3">
                  {value.head}
                </h1>
                <p className="text-gray-800 text-sm mt-3">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
