import {GetStaticProps, NextPage} from "next";
import Link from 'next/link'

import { getSortedPostsData } from '@/lib/posts'

import Layout  from '../components/layout'
import Date from '../components/date'

interface Props {
  allPostsData: {
    id: string,
    date: Date,
    title: string
  }[]
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <Layout home>
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
    </Layout>
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
