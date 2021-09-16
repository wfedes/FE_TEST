import style from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames';

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
        <div className={style.inner}>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>


          <ul className={classNames({[style.data]: true, [style.dataactive]: true})}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <div className={style.subdata}>
            <ul className={classNames({[style.subdatarow]: true, [style.subdatarowactive]: true})}>
              <li>
                <input type="checkbox"/>
              </li>
              <li><p>subName-1</p></li>
              <li><p>- 9.08273</p></li>
              <li><p>- 9.704</p></li>
            </ul>
            <ul className={style.subdatarow}>
              <li>
                <input type="checkbox"/>
              </li>
              <li><p>subName-2</p></li>
              <li><p>- 9.08273</p></li>
              <li><p>- 9.704</p></li>
            </ul>
            <ul className={classNames({[style.subdatarow]: true, [style.subdatarowactive]: true})}>
              <li>
                <input type="checkbox"/>
              </li>
              <li><p>subName-3</p></li>
              <li><p>- 9.08273</p></li>
              <li><p>- 9.704</p></li>
            </ul>
            <ul className={style.subdatarow}>
              <li>
                <input type="checkbox"/>
              </li>
              <li><p>subName-4</p></li>
              <li><p>- 9.08273</p></li>
              <li><p>- 9.704</p></li>
            </ul>
          </div>



          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
          <ul className={style.data}>
            <li>
              <input type="checkbox"/>
            </li>
            <li><p>Name</p></li>
            <li><p>- 9.08273</p></li>
            <li><p>- 9.704</p></li>
          </ul>
        </div>
      </div>
    </div>
  </>
)

export default Result