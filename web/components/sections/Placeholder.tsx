import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import Container from '@/components/shared/Container';

const Placeholder: NextPage = () => {
  return (
    <section id="placeholder">
      <Container>
        <div className="logo">Troffee</div>
      </Container>
      <style jsx>{`
        #placeholder {
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
          font-size: 10em;
        }
      `}</style>
    </section>
  );
};

export default Placeholder;
