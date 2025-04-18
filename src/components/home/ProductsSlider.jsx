import React from "react";
import cardImg1 from "../../assets/images/Home/Paper Cups.webp";
import cardImg2 from "../../assets/images/Home/Paper Bowls.webp";
import cardImg3 from "../../assets/images/Home/Paper Bags.webp";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ProductsSlider() {
  const data = [
    {
      image: cardImg1,
      heading: "Single Wall",
      body: " Lightweight and budget-friendly, ideal for cold beverages or short-use servings. Available in multiple sizes.",
      svg: (
        <svg
          enableBackground="new 0 0 512 512"
          viewBox="0 0 512 512"
          className="w-[40px] md:w-[60px] h-[50px] md:h-[60px] "
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="_x37_5_Paper_Cup">
            <g>
              <path d="m454.386 69.303v29.022c0 9.638-7.881 17.519-17.573 17.519h-361.626c-9.691 0-17.573-7.881-17.573-17.519v-29.022c0-9.638 7.881-17.519 17.573-17.519h361.626c9.692 0 17.573 7.881 17.573 17.519z" />
              <path d="m400.336 41.133h-288.725l16.295-26.519c5.378-8.787 15.07-14.218 25.347-14.218h205.441c10.277 0 20.022 5.432 25.4 14.218z" />
              <path d="m425.843 126.494c-51.957 441.406-40.549 344.485-42.228 358.751-1.757 15.016-14.484 26.359-29.607 26.359h-196.069c-15.07 0-27.797-11.342-29.554-26.359-1.679-14.266 9.729 82.655-42.228-358.751z" />
            </g>
          </g>
        </svg>
      ),
    },
    {
      image: cardImg2,
      heading: "Double Wall",
      body: "Offers extra insulation for hot drinks, keeping hands comfortable and beverages warm. Available in multiple sizes.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512.116 512.116"
          xmlSpace="preserve"
          className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] "
        >
          <g>
            <g>
              <path d="M508.68,120.058H4.54c-2.212,0-4.54,1.652-4.54,3.864C0,229.034,63.5,321.754,159.5,361.11v26.676    c0,2.208,2.88,4.272,5.088,4.272h184.044c2.212,0,2.868-2.064,2.868-4.272V361.11c96-39.356,160.616-132.076,160.616-237.188    C512.116,121.71,510.892,120.058,508.68,120.058z" />
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      ),
    },
    {
      image: cardImg3,
      heading: "Ripple Wall",
      body: "Designed for maximum grip and heat protection, preferred for premium beverage services. Available in multiple sizes.",
      svg: (
        <svg
          id="Capa_1"
          enableBackground="new 0 0 593.922 593.922"
          height="60"
          viewBox="0 0 593.922 593.922"
          className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] "
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g id="Page-1_49_">
              <g id="_x30_50---Paper-Bag">
                <path
                  id="Path_165_"
                  clipRule="evenodd"
                  d="m92.026 95.452h284.478c-13.542-16.306-18.83-37.935-14.339-58.65 2.962-14.089 10.168-26.932 20.649-36.802h-274.625c-11.585.151-22.893 3.558-32.634 9.832-21.173 13.796-28.564 41.321-17.149 63.867 6.177 13.038 19.196 21.461 33.62 21.753z"
                  fillRule="evenodd"
                />
                <path
                  id="Shape_75_"
                  d="m420.804 116.663h-326.54l-59.403 465.317c-.384 3.02.549 6.058 2.56 8.343s4.907 3.596 7.951 3.599h330.666c5.333-.005 9.833-3.969 10.51-9.259l60.675-474.978c-7.995 4.715-17.138 7.13-26.419 6.978zm-261.644 456.047h-89.682c-3.048 0-5.948-1.311-7.962-3.598-2.014-2.288-2.946-5.331-2.559-8.354l9.397-73.657c.744-5.813 6.06-9.923 11.873-9.179s9.923 6.06 9.179 11.873l-7.88 61.704h77.634c5.857 0 10.606 4.748 10.606 10.606 0 5.857-4.748 10.605-10.606 10.605z"
                />
                <g clipRule="evenodd" fillRule="evenodd">
                  <path
                    id="Path_164_"
                    d="m477.333 233.326c0-5.857 4.748-10.606 10.606-10.606s10.606 4.748 10.606 10.606v292.209l60.601 53.867c-39.019-334.399-57.271-489.042-58.332-500.708-.749-11.078-2.412-22.074-4.974-32.878-7.876-26.379-31.72-44.779-59.233-45.711-25.324-.713-47.697 16.381-53.665 41.002-2.332 11.03-.835 22.526 4.242 32.591 6.177 13.038 19.196 21.461 33.62 21.752 4.604.006 9.162-.925 13.395-2.736 10.256-3.332 17.451-12.572 18.168-23.333.477-4.416-.295-8.876-2.227-12.875-1.879-4.274-5.36-7.64-9.694-9.375-4.923-1.743-10.41-.162-13.65 3.935-.267.64-.369 1.336-.297 2.026.361 3.82-1.37 7.538-4.526 9.721s-7.245 2.49-10.692.804-5.715-5.103-5.929-8.934c-.35-4.567.529-9.145 2.545-13.257 8.139-13.819 25.036-19.784 40.047-14.137 9.467 3.684 17.126 10.912 21.349 20.151 3.585 7.491 5.052 15.82 4.242 24.086-94.072 736.526-54.735 428.556-64.747 506.954l68.545-53.379z"
                  />
                  <path
                    id="Path_163_"
                    d="m423.392 593.922h120.174l-56.084-49.847z"
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <section className="section4 bg-[#f5f0e9] relative py-10  md:py-15 grid grid-cols-1 gap-4">
        <div className="overlay"></div>
        <div className="d-flex flex-col content-center md:mt-0 container mx-auto text-center">
          <p className="text-md text-dg ">
            <span className="section-title__tagline">
              Favourite for a Reason
            </span>
          </p>
          <h1 className="font-bold text-black text-4xl md:text-7xl my-5">
            Paper Cups Lead the Way in Everyday Sustainability
          </h1>
        </div>
        <div className=" grid grid-cols-1 container  mx-auto slider-container ">
          <Slider className="grid grid-cols-3 gap-4 " {...settings}>
            {data.map((val, index) => (
              <div className="px-2">
                <div
                  className="text-center   bg-white shadow-md iconbox "
                  key={index}
                >
                  <div className="">
                    <img src={val.image} />
                  </div>
                  <div className="grid grid-rows-1 gap-6    iconbox px-5 md:px-15 py-5 md:py-5 ">
                    {/* <div className=" w-30 h-30 bg-dg rounded-full mx-auto thm-icon">
                    {val.svg}
                  </div> */}
                    <div className="">
                      <h3 className="text-3xl md:text-4xl font-semibold">
                        {val.heading}
                      </h3>
                      <p className="text-lblack">{val.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
