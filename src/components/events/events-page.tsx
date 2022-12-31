import React from "react";
import Image from "next/image";
import Link from "next/link";
interface event {
  id: string;
  title: string;
  description: string;
  image: string;
}
const AllEvents = ({ data }: any) => {
  return (
    <div className="events_page">
      {data?.map((ev: event) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <a className="card">
            <Image src={ev.image} alt={ev.title} width={300} height={300} />{" "}
            <h2>{ev.title} </h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;
