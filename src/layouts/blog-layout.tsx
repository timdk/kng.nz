import { NextPage } from 'next'
import Link from 'next/link'

import Layout from './layout'

import '@exampledev/new.css/new.css'

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
            <h1>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h1>
          ) : (
            <>
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
              <a>← Back to posts</a>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}
export default BlogLayout
