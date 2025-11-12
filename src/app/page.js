import CTASection from "@/components/CTASection";
import ExploreSearch from "@/components/ExploreSearch";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowHiiveWorks from "@/components/HowHiveWorks";
import Navbar from "@/components/Navbar";
import PrivateMarketWindow from "@/components/PrivateMarketWindow";
import StatsSection from "@/components/StatsSection";
import WhyHiive from "@/components/WhyHive";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <ExploreSearch />
      <WhyHiive />
      <HowHiiveWorks />
      <PrivateMarketWindow />
      <CTASection />
      <Footer />
    </>
  );
};

export default LandingPage;
