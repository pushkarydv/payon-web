import React from "react";
import Header from "../components/global/Header/Header";
import Features from "../components/HomeComponents/Features";
import Footer from "../components/HomeComponents/Footer";
import Hero from "../components/HomeComponents/Hero";
import OpenSource from "../components/HomeComponents/OpenSource";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <OpenSource />
      <Footer />
    </>
  );
}
