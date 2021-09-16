import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/index.module.scss'

import Header from '@components/header/index'
import Lnb from '@components/lnb/index'
import Result from '@components/result/index'
import Select from '@components/select/index'

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
      <section className={styles.resultarea}>
        <Result />
        <Select />
      </section>
    </div>
  )
}

export default Home
