import React from "react";

export default function Section3({ propsData }) {
  // console.log(propsData);
  return (
    <>
      <section className="my-15 md:my-20" id={propsData?.id || ""}>
        <div
          id="products"
          className={`container grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-20  content-center mx-auto px-0 `}
        >
          <div className={propsData?.direction || ""}>
            <img src={propsData?.image || ""} className="w-full" />
          </div>

          <div className="d-flex flex-col content-center mt-2 md:mt-0">
            <p
              className="text-md text-dg my-3"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <span className="section-title__tagline">
                {propsData?.title || ""}
              </span>
            </p>
            <h1
              className="font-bold text-black text-4xl md:text-7xl my-3 md:my-5"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="900"
            >
              {propsData?.heading || ""}
            </h1>
            {/* <p
              className="text-lblack text-lg md:text-2xl my-5"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Pumps are made of high-quality stainless steel for durability.
            </p> */}
            <p
              className="font-normal text-md my-0 md:my-5 text-lblack"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              {propsData?.body || ""}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
