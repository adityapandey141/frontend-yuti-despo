import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import footerlogo from "../assets/images/footer-logo.png";
export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    console.log(sidebar);
    if (sidebar) {
      return setSidebar(false);
    }
    return setSidebar(true);
  };

  const navItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/#about" },
    { name: "Products", url: "/products" },
    { name: "Why Us", url: "/#whyus" },
    { name: "Contact Us", url: "/contact" },
  ];
  return (
    <>
      <nav className=" bg-white text-tl shadow-lg sticky top-0 z-5 md:px-15 navbar">
        <div className=" mx-auto px-5 py-2">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-between items-center h-20">
            <div className="col-span-1 flex items-center">
              <a href="#" className="text-xl font-bold">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[90%] lg:w-[70%] mr-2 inline"
                />
              </a>
            </div>

            <div className="col-span-3 hidden md:grid grid-cols-5 gap-0 text-center items-center  md:space-x-3 lg:space-x-5 navmenu">
              {navItems.map((item, index) =>
                item.url.startsWith("/#") ? (
                  <a key={index} href={item.url}>
                    {item.name}
                  </a>
                ) : (
                  <Link key={index} to={item.url}>
                    {item.name}
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:block col-span-1">
              <div className="flex justify-items-center items-center">
                <div className="">
                  <div className="main-header__right__call-icon">
                    <span className="icon-phone-ringing">
                      <svg
                        fill="#000000"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 512 512"
                        enableBackground="new 0 0 512 512"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <path d="M368,234.375v74.438l-54.5-59.422l16.719-11.312c-5.984-1.531-11.641-3.922-16.688-7.203L256,271.75L166.281,208H256 h37.625c-2.391-4.984-4-10.344-4.812-16H256H128v160h128h128V223.062C379.422,227.75,373.969,231.531,368,234.375z M144,212.531 l54.5,36.859L144,308.812V212.531z M256,336h-92.406l45.562-79.422L256,288.25l46.844-31.672L348.406,336H256z"></path>
                            </g>
                            <path d="M344,144c-22.094,0-40,17.906-40,40s17.906,40,40,40s40-17.906,40-40S366.094,144,344,144z M344,214.406L324.797,192H336 v-32h16v32h11.203L344,214.406z"></path>
                          </g>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className=" ml-2">
                  <div className="main-header__right-call-number ">
                    <p>Email</p>
                    <h5>
                      <a href="mailto:yutidispo@gmail.com">
                        yutidispo@gmail.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-right justify-end">
              <button
                id="mobile-menu-button"
                className="outline-none"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${
          sidebar ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-64 h-full bg-dg text-white z-40 transform  transition duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button onClick={toggleSidebar} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="mt-4 mb-8 text-center">
            <img src={footerlogo} alt="Logo" className=" w-40 mb-2" />
          </div>
          <div className="mt-5 border-t-1 pt-5"></div>
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) =>
              item.url.startsWith("/#") ? (
                <a key={index} href={item.url} onClick={toggleSidebar}>
                  {item.name}
                </a>
              ) : (
                <Link key={index} to={item.url} onClick={toggleSidebar}>
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="mt-5 border-t-1 pt-5">
            <h1 className="text-3xl font-bold text-yel">Address</h1>
            <p className="mt-3">
              138, Ajit Nagar Society, Nr. Urmi Society, Dinesh Mill Road,
              Vadodara-390020.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="tel:+919824253196"
              className="block bg-[#6383aa] hover:bg-blue-600 text-white text-center font-medium px-4 py-2 rounded"
            >
              +91 9824253196
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
