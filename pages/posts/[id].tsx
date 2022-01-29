import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head'

import PostData from '@/types/post-data';
import { getAllPostIds, getPostData } from '@/lib/posts'

import BlogLayout from '@/layouts/blog-layout';
import Date from '@/components/date'

interface Props {
  postData: PostData;
}

const Post: NextPage<Props> = ({ postData }) => {
  return (
    <BlogLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </BlogLayout>
  )
}
export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const postData = await getPostData(params?.id as string)
  return {
    props: {
      postData
    }
  }
}
