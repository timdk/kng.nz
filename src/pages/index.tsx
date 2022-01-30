import { NextPage } from 'next';

import Layout from '../layouts/layout';
import HomeBanner from '../components/home/home-banner';

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeBanner/>
    </Layout>
  );
};
export default Home;
