import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/index.module.scss'

import Header from '@components/header/index'
import Lnb from '@components/lnb/index'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FE_TEST</title>
        <meta name="description" content="FE_TEST page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <h1>Project Name</h1>
      <Lnb />
      <main className={styles.main}>
        <p>FE_TEST</p>
      </main>
    </div>
  )
}

export default Home
