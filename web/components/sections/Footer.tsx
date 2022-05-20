import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import Container from '@/components/shared/Container';

const Footer: NextPage = () => {
  return (
    <footer>
      <Container>[FOOTER]</Container>
      <style jsx>{`
        footer {
          display: none;
          position: relative;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
