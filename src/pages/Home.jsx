import React from "react";

import Hero from "../components/home/Hero";
import Section2 from "../components/home/Section2";
import Section3 from "../components/home/Section3";
import Section4 from "../components/home/Section4";
import Section5 from "../components/home/Section5";
import Section6 from "../components/home/Section6";
import aboutImg from "../assets/images/Home/Dealing in Sustainable Packaging Solutions.webp";
import sustainabilityImg from "../assets/images/Home/Protecting Our Planet.webp";

export default function Home() {
  let sustainability = {
    id: "whyus",
    direction: "order-last",
    image: sustainabilityImg,
    title: " Protecting Our Planet",
    heading: "Responsible Packaging for a Greener Future",
    body: "We're committed to reducing environmental impact. Our products are made from responsibly sourced materials, ensuring a minimal ecological footprint without compromising on quality.",
  };
  let aboutus = {
    id: "about",
    direction: "order-first",
    image: aboutImg,
    title: " About Us",
    heading: "Dealing in Sustainable Packaging Solutions",
    body: "We are Yuti Dispo, a trusted manufacturer, exporter, and supplier of high-quality paper cups, bowls, and straws. Focused on the B2B market, we provide businesses with sustainable, durable, and food-safe packaging solutions. Our commitment to quality and sustainability ensures you get the best products while reducing environmental impact.",
  };

  return (
    <>
      <Hero />
      <Section2 />
      <Section3 propsData={aboutus} />
      <Section4 />
      <Section3 propsData={sustainability} />
      <Section5 />
      <Section6 />
    </>
  );
}
