import type { NextPage } from 'next';
import zIndexes from '@/config/zIndexes.json';
import Container from '@/components/shared/Container';

const Header: NextPage = () => {
  return (
    <header>
      <Container>[HEADER]</Container>
      <style jsx>{`
        header {
          display: none;
          position: relative;
          z-index: ${zIndexes.header};
        }
      `}</style>
    </header>
  );
};

export default Header;
