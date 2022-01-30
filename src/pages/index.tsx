import { NextPageWithLayout } from '@/types/page'

import Layout from '@/layouts/layout'
import HomeBanner from '@/components/home/home-banner'

const Home: NextPageWithLayout = () => (
  <>
    <HomeBanner/>
  </>
)

Home.getLayout = (page) => (<Layout>{page}</Layout>)

export default Home
