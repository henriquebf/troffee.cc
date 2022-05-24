import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Intro from '@/components/sections/Intro';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Troffee</title>
        <meta name="description" content="Riding your dreams" />
        <meta property="og:title" content="Troffee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="main">
        <Intro />
      </main>

      <Footer />
    </>
  );
};

export default Home;
