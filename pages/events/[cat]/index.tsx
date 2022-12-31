import CatEvent from "../../../src/components/events/catEvent";
interface events {
  id: string;
  title: string;
  city: string;
  description: string;
  image: string;
  emails_registered: string[];
}
const EventsCatPage = ({ data, pageName }: any) => {
  return <CatEvent data={data} pageName={pageName} />;
};
export default EventsCatPage;
//Indicate which paths should be created on build time (returning a paths array)

//Indicate what to do when a certain page eg: "product/myProduct123" doesn't exist in the NextJS Cache (returning a fallback type)
export async function getStaticPaths() {
  const { events_categories } = await require("/data/data.json");
  const allPaths = events_categories.map((ev: events) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  // console.log(allPaths, "allPaths");

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  console.log(context, "context");
  const id = context?.params.cat;
  const { allEvents } = await require("/data/data.json");

  const data = allEvents.filter((ev: events) => ev.city === id);

  return { props: { data, pageName: id } };
}
/*
a page has Dynamic Routes and uses getStaticProps, it needs to define a list of paths to be statically generated.

When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes,
 Next.js will statically pre-render all the paths specified by getStaticPaths.
*/
