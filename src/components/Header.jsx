import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
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
    { name: "About", url: "#about" },
    { name: "Products", url: "/products" },
    { name: "Why Us", url: "#about" },
    { name: "Contact Us", url: "/contact" },
  ];
  return (
    <>
      <nav className=" bg-white text-tl shadow-lg sticky top-0 z-5 md:px-15 navbar">
        <div className=" mx-auto px-5 py-2">
          <div className="flex justify-between items-center h-16">
            <div className=" flex items-center">
              <a href="#" className="text-xl font-bold">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[100%] lg:w-[90%] mr-2 inline"
                />
              </a>
            </div>

            <div className="hidden md:grid grid-cols-5 gap-3 text-center items-center  md:space-x-3 lg:space-x-5 navmenu">
              {navItems.map((item, index) => (
                <Link key={index} to={item.url}>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-0 justify-items-center">
                <div className="">
                  <div className="main-header__right__call-icon">
                    <span className="icon-phone-ringing"></span>
                  </div>
                </div>
                <div className="">
                  <div className="main-header__right-call-number ">
                    <p>Have Waste/Pickup?</p>
                    <h5>
                      <a href="tel:12463330088">+ 1- (246) 333-0088</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden flex items-center">
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
            <img src={logo} alt="Logo" className=" w-50 mb-2" />
          </div>
          <div className="mt-5 border-t-1 pt-5"></div>
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link key={index} to={item.url}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-5 border-t-1 pt-5">
            <h1 className="text-3xl font-bold text-yel">Address</h1>
            <p className="mt-3">
              138, Ajit Nagar Soc., Near Urmi School, Dinesh Mill Road Akota,
              Vadodara, Gujarat, India.
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
