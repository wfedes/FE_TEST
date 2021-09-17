import type { NextPage } from 'next'
import style from '@styles/index.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'

import Header from '@components/header/index'
import Lnb from '@components/lnb/index'
import Select from '@components/select/index'

const Home: NextPage = ({ hdata }:any) => {
  // console.log(hdata[1].toFixed(5));
  return (
    <div className={style.container}>
      <Head>
        <title>FE_TEST</title>
        <meta name="description" content="FE_TEST page" />
      </Head>
      <Header />
      <h1>Project Name</h1>
      <Lnb />
      <section className={style.resultarea}>
        {/* <Result /> */}
        <div className={style.result}>
          <div className={style.title}>
            <div className={style.inner}>
              <span></span>
              <p>Result</p>
            </div>
            <div className={style.input}>
              <input type="input" placeholder="검색어를 입력해주세요." />
              <button>
              <Image src="/images/icon/icon_search.png" alt="icon" width={18} height={21} />
              </button>
            </div>
          </div>
          <div className={style.table}>
            <ul className={style.header}>
              <li></li>
              <li>
                <p>Name</p>
                <button className={style.icon}>
                  <Image src="/images/icon/icon_ascdesc.png" alt="icon" width={40} height={40} />
                </button>
              </li>
              <li>
                <p>Foxtrot</p>
                <button className={style.icon}>
                  <Image src="/images/icon/icon_ascdesc.png" alt="icon" width={40} height={40} />
                </button>
              </li>
              <li>
                <p>Golf</p>
                <button className={style.icon}>
                  <Image src="/images/icon/icon_ascdesc.png" alt="icon" width={40} height={40} />
                </button>
              </li>
            </ul>
            {/* 소수점 반올림 (5번째자리) */}
            <div className={style.inner}>
              { hdata.map((data:any, index:any) => (
                <ul className={style.data} key={ index }>
                  <li><input type="checkbox"/></li>
                  <li><p>{ data[0] }</p></li>
                  <li><p>{ data[1].toFixed(5) }</p></li>
                  <li><p>{ data[2].toFixed(5) }</p></li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <Select />
      </section>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const { data: hdata } = await axios.get(`http://testapi.hits.ai/result`);
  return { hdata }
}

export default Home
