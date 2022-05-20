import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Placeholder from '@/components/sections/Placeholder';

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
        <Placeholder />
      </main>

      <Footer />
    </>
  );
};

export default Home;
