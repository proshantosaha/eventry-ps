import EventDetails from "@/components/detailsPage/EventDetails";
import EventVanue from "@/components/detailsPage/EventVanue";
import HeroSection from "@/components/detailsPage/HeroSection";
import { getEventById } from "@/db/queries";
import React from "react";

export async function generateMetadata({ params: { id } }) {
  const eventInfo = await getEventById(id);
  return {
    title: `Eventry - ${eventInfo?.name}`,
    description: eventInfo?.details,
    openGraph: {
      images: [eventInfo?.imageUrl],
    },
  };
}

const EventDetailspage = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);
  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
          <EventVanue location={eventInfo?.location} />
        </div>
      </section>
    </>
  );
};

export default EventDetailspage;
