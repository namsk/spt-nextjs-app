import { Metadata } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import homeStyles from '../styles/Home.module.css'



export const metadata:Metadata = {
  title: 'Sean Nam',
  description: 'Home page',
}

export default function Home() {
  console.log("page.tsx");
  return (
    // <div className={styles.container}>
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

        </ul>
      </section>
    </div>
  )
}
