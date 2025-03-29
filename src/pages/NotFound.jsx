import React from "react";
import { Link } from "react-router";
export default function NotFound() {
  return (
    <>
      <section className="page-header py-15 md:py-25">
        <div className="page-header-bg"></div>
        <div className="container mx-auto  ">
          <div className="page-header__inner grid grid-col-1 gap-4">
            <h2 className="text-5xl font-bold text-white">404 Error</h2>
            <ul className="thm-breadcrumb list-unstyled ">
              <li>
                <a href="index.html">Home </a>
              </li>
              <li> - </li>
              <li> 404 Error</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className=" container mx-auto content-center error-page__inner grid grid-cols-1 gap-6 text-center">
          {/* <div className="error-page-shape float-bob-y-2">
            <img src="../assets/images/shapes/error-page-shape.png" alt="" />
          </div> */}
          <h2 className="error-page__title text-9xl bold">404</h2>
          <h3 className="error-page__tagline text-5xl bold">
            Sorry we can't find that page!
          </h3>
          <p className="error-page__text">
            The page you are looking for was never existed.
          </p>

          <div>
            <Link to={"/"} className="thm-btn error-page__btn">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
