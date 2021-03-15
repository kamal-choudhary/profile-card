import Head from "next/head";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next || Tailwind App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-0 p-0">
        <ProfileCard />
      </div>
    </div>
  );
}
