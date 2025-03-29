import React from "react";

export default function Cta() {
  return (
    <>
      <section className="" id="cta">
        <div className="container mx-auto bg-yel py-5 ctacontainer top-50">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 justify-center justify-items-center  items-center align-center ">
            <div className="col-span-2">
              <h1
                className="font-bold text-center text-black text-3xl md:text-5xl my-5"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="900"
              >
                It is the right <br></br> time to switch.
              </h1>
            </div>
            <div className="col-span-1 ctaicon">
              <div className="have-waste__icon  ">
                <span className="icon-phone-ringing "></span>
              </div>
            </div>
            <div className="col-span-2">
              <h1
                className="font-bold text-center text-black text-xl md:text-4xl my-5"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="900"
              >
                <a href="tel:12463330088">+91 9824253196</a>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
