import SingleEvent from "../../../src/components/events/single-event";

interface events {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}

const EventPage = ({ data }: any) => {
  return <SingleEvent data={data} />;
};
export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await require("/data/data.json");
  const allPaths = allEvents.map((path: events) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { allEvents } = await require("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev: events) => ev.id === id);
  return {
    props: {
      data: eventData,
    },
  };
}
