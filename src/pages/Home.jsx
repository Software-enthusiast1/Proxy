import Nav from '../layouts/Nav';
import Search from '../components/SearchContainer';
import QuickLinks from '../components/QuickLinks';
import { memo } from 'react';

const Home = memo(() => {
  return (
    <>
      <Nav />
      <Search />
      <QuickLinks />
    </>
  );
});

Home.displayName = 'Home';
export default Home;
