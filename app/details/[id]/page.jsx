import EventDetails from "@/components/detailsPage/EventDetails";
import EventVanue from "@/components/detailsPage/EventVanue";
import HeroSection from "@/components/detailsPage/HeroSection";
import { getEventById } from "@/db/queries";
import React from "react";

const page = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);
  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section class="container">
        <div class="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
          <EventVanue location={eventInfo?.location} />
        </div>
      </section>
    </>
  );
};

export default page;
