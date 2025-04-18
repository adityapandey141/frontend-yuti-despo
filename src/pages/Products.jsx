import React from "react";
import ProductsHero from "../components/products/ProductsHero";
import ProductsCards from "../components/products/ProductsCards";
import ProductsList from "../components/products/ProductsList";
import ProductsWhy from "../components/products/ProductsWhy";
import ProductsSlider from "../components/home/ProductsSlider";

export default function Products() {
  return (
    <>
      <ProductsHero />
      <ProductsCards />
      <ProductsSlider />
      <ProductsList />
      <ProductsWhy />
    </>
  );
}
