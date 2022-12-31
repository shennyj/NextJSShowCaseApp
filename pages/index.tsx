import Head from "next/head";
import HomePage from "../src/components/home/home-page";
export default function Home({ data }: any) {
  return (
    <div>
      <Head>
        <title>Events app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await require("/data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
//nextjs runs this server side function first. never runs on client. can put private info.
//just dont pass thru props
//then runs our page

//SSR-build pages after deploy at requested time
//static generation-prepare before deploy app

/*
CSR

SSR
*/
/*
GETSERVERSIDEPROPS-
fetch data for every instance user requests to page
it etches data first before sending page to client
improves seo-data rendered before hits client
GETSTATICPROPS-
used inside a page to fetch data at build time
wont refresh data till another build is run
lets page be statically generated. generates fastest loading time
data rendered before reaches client, seo improves
*/