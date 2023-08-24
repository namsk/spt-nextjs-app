import { getAllPostIds, getPostData } from '@/lib/posts'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

// const [id] = () => {
// const Post = ({ postData }: {postData: {
//   title: string,
//   date: string,
//   contentHtml: string
// }}) => {
const Post = async ({params}: {
  params: {
    id: string
  }
}) => {
  const postData = await getPostData(params.id);
  
  return (
    <div>
      <article>
        <h1>{postData.title}</h1>
        <div>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  )
}

export default Post

// deprecated in next.js 13: getStaticPaths, getStaticProps

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPostIds();
//   // [{params: {id: 'pre-rendering'}, {id: 'ssg-ssr'}}]
//   return {
//     paths,
//     fallback: false, 
//   }
// }

// export const getStaticProps:GetStaticProps = async ({ params }) => {
//   const postData = await getPostData(params.id as string);
//   return {
//     props: {
//       postData
//     }

//   }
// }

