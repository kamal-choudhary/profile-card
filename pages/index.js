import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next || Tailwind App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-red-500 text-6xl bg-black">
          My First Tailwind App
        </h1>
      </main>
    </div>
  );
}
