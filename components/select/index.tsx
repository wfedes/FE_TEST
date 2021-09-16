import style from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Select = () => (
  <>
    <div className={style.select}>
      <div className={style.title}>
        <div className={style.inner}>
          <p><span></span>Select</p>
        </div>
        <button>Download</button>
      </div>
      <div className={style.table}>
        <ul className={style.header}>
          <li>
            <p>Select Name</p>
            <Image src="/images/icon/icon_ascdesc.png" alt="icon" width={40} height={40} />
          </li>
        </ul>
        <ul className={style.selectdata}>
          <li>
            <p>A-1</p>
            <Image src="/images/icon/icon_close.png" alt="icon" width={40} height={40} />
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default Select