import React from "react";
import Link from "next/link";
import Image from "next/image";
interface event {
  id: string;
  title: string;
  description: string;
  image: string;
}
const HomePage = ({ data }: any) => {
  return (
    <div className="home_body">
      {data.map((ev: event) => (
        <Link href={`/events/${ev.id}`} key={ev.id} passHref>
          <a className="card">
            <Image
              className="image"
              width={500}
              height={300}
              src={ev.image}
              alt={ev.title}
            />
            <div className="content">
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
