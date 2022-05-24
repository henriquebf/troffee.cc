import type { NextPage } from 'next';
import sizes from '@/config/sizes.json';
import zIndexes from '@/config/zIndexes.json';
import Container from '@/components/shared/Container';

const Intro: NextPage = () => {
  return (
    <section id="intro">
      <Container>
        <div className="logo">Troffee</div>
      </Container>
      <style jsx>{`
        #intro {
          display: flex;
          align-items: center;
          position: relative;
          z-index: ${zIndexes.section};
          height: 100vh;
          color: white;
          background-color: black;
        }

        .logo {
          font-family: 'Lobster', cursive;
          text-align: center;
          font-size: 5em;
        }

        @media (min-width: ${sizes.container}) {
          .logo {
            font-size: 10em;
          }
        }
      `}</style>
    </section>
  );
};

export default Intro;
