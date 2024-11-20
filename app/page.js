import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import Image from "next/image";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <EventList query={query} />
    </section>
  );
}
