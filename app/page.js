import EventList from "@/components/landing/EventList";
import Header from "@/components/landing/Header";
import Loading from "@/components/loading";
import Image from "next/image";
import { Suspense } from "react";

export default function Home({ searchParams: { query } }) {
  return (
    <section className="container">
      <Header />
      <Suspense key={query} fallback={<Loading />}>
        <EventList query={query} />
      </Suspense>
    </section>
  );
}
