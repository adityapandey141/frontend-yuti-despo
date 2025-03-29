import React from "react";
import { Link } from "react-router";

export default function ProductsHero() {
  return (
    <section className="page-header py-15 md:py-20">
      <div className="page-header-bg"></div>
      <div className="container mx-auto  ">
        <div className="page-header__inner grid grid-col-1 gap-4">
          <h2 className="text-5xl font-bold text-white">Products </h2>
          <ul className="thm-breadcrumb list-unstyled ">
            <li>
              <Link to="/">Home </Link>
              {/* <a href="index.html">Home </a> */}
            </li>
            <li> - </li>
            <li> Products</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
