import {GetStaticProps, NextPage} from "next";
import Link from 'next/link'

import PostData from '@/types/post-data';
import { getSortedPostsData } from '@/lib/posts'

import BlogLayout from '@/layouts/blog-layout';
import Date from '@/components/date'

interface Props {
  allPostsData: PostData[]
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <BlogLayout index>
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
    </BlogLayout>
  )
}
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
