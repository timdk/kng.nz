import { GetStaticProps } from 'next'
import { ReactElement } from 'react'
import Link from 'next/link'

import { NextPageWithLayout } from '@/types/page'
import PostData from '@/types/post-data'
import { getSortedPostsData } from '@/lib/posts'

import BlogLayout from '@/layouts/blog-layout'
import Date from '@/components/date'

interface Props {
  allPostsData: PostData[]
}

const PostIndex: NextPageWithLayout<Props> = ({ allPostsData }) => (
  <section>
    <h2>Blog</h2>
    <ul>
      {allPostsData.map(({ id, date, title }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small>
            <Date dateString={date} />
          </small>
        </li>
      ))}
    </ul>
  </section>
)

PostIndex.getLayout = (page: ReactElement) => (<BlogLayout index>{page}</BlogLayout>)

export default PostIndex

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
