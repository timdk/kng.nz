import { NextPage } from 'next';
import Head from 'next/head'

interface Props {
  title?: string;
  metaDescription?: string;
}

const Layout: NextPage<Props> = ({ children, title= 'kng.nz', metaDescription = 'Personal website for a frontend developer' }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={metaDescription}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}
export default Layout;
