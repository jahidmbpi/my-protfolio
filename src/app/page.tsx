import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skils/Skills";

import React from "react";

const Home = () => {
  return (
    <div className="mb-4">
      <Navbar />
      <Banner />
      <Skills />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
