import { NextPage } from 'next';
import Image from 'next/image'
import Link from 'next/link'

import Layout from './layout';

import '@exampledev/new.css/new.css';

const name = 'kng.nz'

interface Props {
  index?: boolean;
  title?: string;
}

const BlogLayout: NextPage<Props> = ({ children, index, title= 'kng.nz' }) => {
  return (
    <Layout title={title}>
      <div>
        <header>
          {index ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt={name}
              />
              <h1>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2>
                <Link href="/">
                  <a>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!index && (
          <div>
            <Link href="/posts">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}
export default BlogLayout;
