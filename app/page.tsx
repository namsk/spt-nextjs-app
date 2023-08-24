import { GetStaticProps, Metadata } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '@/styles/Home.module.css'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export const metadata:Metadata = {
  title: 'Sean Nam',
  description: 'Home page',
}

export default function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <div>
      <section className={homeStyles.headingMd}>
        <p>[Sean Nam Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
              <li key={id} className={homeStyles.listItem}>
                <Link href={`/posts/${id}`}>
                  {title}
                </Link>
                <br />
                <small className={homeStyles.lightText}>
                  {date}
                </small>
              </li>
            ))}
        </ul>
      </section>
    </div>
  )
}

/*
Next.js 13 버전에서는 새로운 데이터 페칭 접근방식을 선호,
  getServerSideProps, getStaticProps, getStaticPaths는 폐기되었음

  참고:
    - https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#static-data-fetching-default
    - https://www.infoworld.com/article/3679489/the-best-new-features-in-nextjs-13.html
    - https://stackoverflow.com/questions/76267351/how-to-fetch-data-server-side-in-the-latest-next-js-tried-getstaticprops-but-it/76766776#76766776
*/
/*
export const getStaticProps:GetStaticProps = async () => {
  console.log('getStaticProps');
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
*/