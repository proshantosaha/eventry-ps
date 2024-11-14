import EventDetails from "@/components/detailsPage/EventDetails";
import EventVanue from "@/components/detailsPage/EventVanue";
import HeroSection from "@/components/detailsPage/HeroSection";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails />
          <EventVanue />
        </div>
      </section>
    </>
  );
};

export default page;
