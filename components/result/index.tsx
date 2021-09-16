import style from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Result = () => (
  <>
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
        <ul className={style.data}>
          <li></li>
          <li>Name</li>
          <li>- 9.08273</li>
          <li>- 9.704</li>
        </ul>
      </div>
    </div>
  </>
)

export default Result